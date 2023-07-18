import { StyledNextLink } from '@components/NextLink/NextLink';
import { PostDetails } from '@components/Posts/Post/PostDetails';
import { useGetPosts } from '@hooks/useGetPosts';
import { Box, Grid } from '@mui/material';
import { useIsAuth } from '~utils/useIsAuth';

export const Posts = () => {
	// if user is not logged in, redirect to login page
	useIsAuth();

	const { posts } = useGetPosts();

	return (
		<Box>
			<StyledNextLink href='create-post' label='Create Post' />
			<Grid container spacing={2}>
				{posts?.map((post) => (
					<Grid item xs={8} md={4}>
						<PostDetails post={post} />
					</Grid>
				))}
			</Grid>
		</Box>
	);
};
