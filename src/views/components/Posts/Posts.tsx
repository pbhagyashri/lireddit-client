import { Button } from '@components/Button';
import { StyledNextLink } from '@components/NextLink/NextLink';
import { PostDetails } from '@components/Posts/Post/PostDetails';
import { Spinner } from '@components/Spinner';
import { useGetPosts } from '@hooks/useGetPosts';
import { Grid, Stack, useTheme, Typography } from '@mui/material';

export const Posts = () => {
	const numPostsToLoad = 6;
	const theme = useTheme();

	const { posts, loading, fetchMore } = useGetPosts(numPostsToLoad);

	return (
		<>
			<Stack direction='row' justifyContent='space-between' sx={{ marginBottom: 2 }}>
				<Typography variant='h2'>LiReddit</Typography>
				<StyledNextLink href='/posts/create-post' label='Create Post' sx={{ color: theme.palette.primary.main }} />
			</Stack>
			{loading && !posts ? (
				<Spinner sx={{ minHeight: '70vh' }} message='Loading posts...' />
			) : (
				<Grid container spacing={2}>
					{posts.map((post) => (
						<Grid item xs={12} md={6} lg={4} key={post.id}>
							<PostDetails post={post} />
						</Grid>
					))}
				</Grid>
			)}
			<Stack spacing={2} py={6} alignItems='center'>
				<Button
					label='Load More'
					variant='outlined'
					sx={{ color: theme.palette.primary.main }}
					onClick={async () => {
						await fetchMore({
							variables: {
								// add +1 becuase apollo return last post in previous query as first post in next query
								// so we need to skip that post which is handled when we update InMemoryCache so we don't get duplicate posts in cache
								// TODO: make this more robust by implementing replay style node and edge based paginations
								limit: numPostsToLoad + 1,
								cursor: posts[posts.length - 1].createdAt,
							},
						});
					}}
				/>
			</Stack>
		</>
	);
};
