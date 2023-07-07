import { Post } from '@/generated/graphql-types';
import {
	Stack,
	Typography,
	IconButton,
	Card,
	CardActions,
	CardContent,
	Link,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useDeletePost } from '@/views/hooks/useDeletePost';

interface Props {
	post: Post;
}

export const PostDetails = ({ post }: Props) => {
	const [isEditMode, setIsEditMode] = useState(false);

	const {
		query: { post: isPostDetailsPage },
		push,
	} = useRouter();

	const deletePost = useDeletePost();

	const handleEditClick = () => {
		setIsEditMode(true);
	};

	return (
		<Card sx={{ minWidth: '100%' }}>
			<CardContent>
				<Stack direction='column' spacing={2}>
					<Typography
						variant='h3'
						component={isPostDetailsPage ? Typography : Link}
						href={`/posts/${post.id}`}
					>
						{post?.title}
					</Typography>
					<Typography color='text.secondary'>{post?.text}</Typography>
				</Stack>
			</CardContent>
			<CardActions>
				<Stack
					direction='row'
					spacing={1}
					justifyContent='flex-end'
					width='100%'
				>
					<IconButton aria-label='edit' onClick={handleEditClick}>
						<EditIcon />
					</IconButton>
					<IconButton
						aria-label='delete'
						onClick={() => {
							deletePost(post.id.toString());
							push('/posts');
						}}
					>
						<DeleteIcon />
					</IconButton>
				</Stack>
			</CardActions>
		</Card>
	);
};
