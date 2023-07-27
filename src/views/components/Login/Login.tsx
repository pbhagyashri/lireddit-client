import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { Stack, Typography } from '@mui/material';
import { FormWrapper } from '@components/FormWrapper';
import { useLoginUser } from '@hooks/useLoginUser/useLoginUser';
import { TextField } from '@components/TextField';
import { Button } from '@components/Button';

const initialValues = {
	username: '',
	password: '',
};

export const Login = () => {
	const { push, query } = useRouter();
	const [loginMutation] = useLoginUser();

	const handleSubmit = async (username: string, password: string) => {
		const { data } = await loginMutation({
			variables: { inputs: { username, password } },
		});
		localStorage.setItem('token', `${data?.login}`);

		if (query.next === 'string') {
			push(query.next);
		} else {
			push('/');
		}
	};

	return (
		<FormWrapper>
			<Formik initialValues={initialValues} onSubmit={({ username, password }) => handleSubmit(username, password)}>
				<Form>
					<Stack spacing={2} direction='column' width={{ xs: 400, sm: 600 }} pt={5}>
						<Typography variant='h1'>Login</Typography>
						<TextField label='Username' type='text' name='username' placeholder='please enter your username' />
						<TextField label='Password' type='password' name='password' placeholder='please enter your password' />
						<Stack direction='row-reverse'>
							<Button variant='contained' type='submit' label='Login' />
						</Stack>
					</Stack>
				</Form>
			</Formik>
		</FormWrapper>
	);
};
