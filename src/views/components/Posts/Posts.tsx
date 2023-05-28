import { usePostsQuery } from '@/views/hooks/useGetPosts/useGetPosts.generated';
import { Stack, MenuList, MenuItem, Typography, Box } from '@mui/material';
import { StyledNextLink } from '../NextLink/NextLink';

export const Posts = () => {
	const { data } = usePostsQuery();

	return (
		<Box>
			<StyledNextLink href='create-post' label='Create Post' />
			<MenuList>
				{data?.posts.map((post) => (
					<MenuItem
						disableRipple={true}
						disableTouchRipple={true}
						key={post.id}
					>
						<Stack direction='column'>
							<Typography variant='h4'>{post.title}</Typography>
							<Typography variant='body1'>{post.text}</Typography>
						</Stack>
					</MenuItem>
				))}
			</MenuList>
		</Box>
	);
};
