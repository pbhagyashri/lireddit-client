import { Stack, Typography, IconButton, Card, CardActions, CardContent, Link } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
// import { useState } from 'react';
import { useRouter } from 'next/router';
import { useDeletePost } from '@hooks/useDeletePost';
import { Post } from 'src/generated/graphql-types';
import { formatPostTime } from './post.helper';
import { PostTime } from '@components/Posts/Post/PostTime';

interface Props {
	post: Post;
}

export const PostDetails = ({ post }: Props) => {
	// coming soon
	// const [isEditMode, setIsEditMode] = useState(false);

	const {
		query: { post: isPostDetailsPage },
		push,
	} = useRouter();

	const deletePost = useDeletePost();

	// coming soon
	// const handleEditClick = () => {
	// 	setIsEditMode(true);
	// };

	return (
		<Card sx={{ minWidth: '100%' }} aria-label='post' role='region'>
			<CardContent
				sx={{
					height: 200,
					overflow: 'auto',
					maskImage: 'linear-gradient(to bottom, black calc(100% - 28px), transparent 100%)',
				}}>
				<PostTime date={post?.createdAt} username={post?.creator.username} />
				<Stack direction='column' spacing={2}>
					<Typography
						variant='h3'
						component={isPostDetailsPage ? Typography : Link}
						href={`/posts/${post.id}`}
						role='link'
						aria-label={post.title}>
						{post?.title}
					</Typography>
					<Typography color='text.secondary' variant='body2' aria-label='post body' role='heading'>
						{post?.text}
					</Typography>
				</Stack>
			</CardContent>
			<CardActions>
				<Stack direction='row' spacing={1} justifyContent='flex-end' alignItems='center' width='100%'>
					{/* coming soon */}
					{/* {!isEditMode && (
						<IconButton aria-label='edit' onClick={handleEditClick}>
							<EditIcon />
						</IconButton>
					)} */}
					<IconButton
						aria-label='delete'
						onClick={() => {
							deletePost(post.id.toString());
						}}>
						<DeleteIcon />
					</IconButton>
				</Stack>
			</CardActions>
		</Card>
	);
};
