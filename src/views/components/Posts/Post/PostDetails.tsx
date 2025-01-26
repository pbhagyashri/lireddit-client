import { Stack, Typography, IconButton, Card, CardActions, CardContent, Link } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from 'next/router';
import { useDeletePost } from '@hooks/useDeletePost';
import { Post } from 'src/generated/graphql-types';
import { PostTime } from '@components/Posts/Post/PostTime';
import { PostsDocument } from '@hooks/useGetPosts/useGetPosts.generated';
import { ErrorToast } from '@components/ErrorToast';

interface Props {
	post: Post;
}

export const PostDetails = ({ post }: Props) => {
	const {
		query: { post: isPostDetailsPage },
	} = useRouter();

	const [deletePostMutation, { error }] = useDeletePost();

	const handleDelete = async () => {
		try {
			await deletePostMutation({
				variables: {
					deletePostId: post.id.toString(),
				},
				refetchQueries: [PostsDocument],
			});
		} catch (error) {
			return;
		}
	};

	return (
		<>
			<ErrorToast error={error} />
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
						<IconButton aria-label='delete' onClick={handleDelete}>
							<DeleteIcon />
						</IconButton>
					</Stack>
				</CardActions>
			</Card>
		</>
	);
};
