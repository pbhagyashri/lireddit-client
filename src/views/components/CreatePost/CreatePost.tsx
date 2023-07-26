import { Button } from '@components/Button';
import { FormWrapper } from '@components/FormWrapper';
import { TextField } from '@components/TextField';
import { Stack, Typography } from '@mui/material';
import { useCreatePost } from '@hooks/useCreatePost';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { useIsAuth } from '~utils/useIsAuth';

const initialValues = {
	title: '',
	text: '',
};

export const CreatePost = () => {
	const [createPostMutation] = useCreatePost();
	const { push } = useRouter();

	// if user is not logged in, redirect them to the login page
	useIsAuth();

	const handleCreatePost = async (title: string, text: string) => {
		await createPostMutation({ variables: { title, text } });
		push('/');
	};

	return (
		<FormWrapper>
			<Formik initialValues={initialValues} onSubmit={({ title, text }) => handleCreatePost(title, text)}>
				<Form>
					<Stack spacing={2} direction='column' width={{ xs: 400, sm: 600 }} pt={5}>
						<Typography variant='h1'>Create Post</Typography>
						<TextField label='Title' placeholder='title' type='text' name='title' />
						<TextField label='Body' placeholder='text...' type='text' name='text' multiline rows={3} />
						<Stack direction='row-reverse'>
							<Button variant='contained' type='submit' label='Create Post' />
						</Stack>
					</Stack>
				</Form>
			</Formik>
		</FormWrapper>
	);
};
