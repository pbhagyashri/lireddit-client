import { StyledNextLink } from '@components/NextLink/NextLink';
import { PostDetails } from '@components/Posts/Post/PostDetails';
import { useGetPosts } from '@hooks/useGetPosts';
import { Box, Grid } from '@mui/material';

export const Posts = () => {
	const { posts } = useGetPosts();

	return (
		<Box>
			<StyledNextLink href='create-post' label='Create Post' />
			<Grid container spacing={2}>
				{posts?.map((post) => (
					<Grid item xs={8} md={4} key={post.id}>
						<PostDetails post={post} />
					</Grid>
				))}
			</Grid>
		</Box>
	);
};
