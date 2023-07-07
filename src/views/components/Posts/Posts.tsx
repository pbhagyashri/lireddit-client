import { MenuList, MenuItem, Box, Link, Grid } from '@mui/material';
import { StyledNextLink } from '../NextLink/NextLink';
import { useGetPosts } from '@/views/hooks/useGetPosts';
import { PostDetails } from '@/views/components/Posts/Post/PostDetails';

export const Posts = () => {
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
