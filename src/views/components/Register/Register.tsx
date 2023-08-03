import { Button } from '@components/Button';
import { FormWrapper } from '@components/FormWrapper';
import { TextField } from '@components/TextField';
import { useRegisterUser } from '@hooks/useRegisterUser/useRegisterUser';
import { Stack, Typography } from '@mui/material';
import { Formik, Form } from 'formik';
import { useRouter } from 'next/router';

const initialValues = {
	username: '',
	password: '',
};

export const Register = () => {
	const [registerMutation] = useRegisterUser();
	const { push } = useRouter();

	return (
		<FormWrapper>
			<Formik
				initialValues={initialValues}
				onSubmit={async ({ username, password }) => {
					const { data, errors } = await registerMutation({ variables: { inputs: { username, password } } });
					if (errors) {
						console.log(errors[0].message);
					}

					localStorage.setItem('token', `${data?.register?.token}`);
					push('/posts');
				}}>
				<Form>
					<Stack spacing={2} direction='column' width={{ xs: 400, sm: 600 }} pt={5}>
						<Typography variant='h1'>Register</Typography>
						<TextField type='text' label='Username' name='username' />
						<TextField type='password' label='Password' name='password' />
						<Stack direction='row-reverse'>
							<Button variant='contained' type='submit' label='Register' />
						</Stack>
					</Stack>
				</Form>
			</Formik>
		</FormWrapper>
	);
};
