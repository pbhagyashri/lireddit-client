import { StyledNextLink } from '@components/NextLink/NextLink';
import { PostDetails } from '@components/Posts/Post/PostDetails';
import { useGetPosts } from '@hooks/useGetPosts';
import { Box, Grid } from '@mui/material';

export const Posts = () => {
	// const today = new Date();
	// console.log({ today });
	// console.log(new Date().toISOString());
	const { posts } = useGetPosts(4, '2023-07-31T05:38:25.130Z');

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
