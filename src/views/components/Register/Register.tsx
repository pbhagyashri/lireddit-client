import { Stack, Typography } from '@mui/material';
import { Formik, Form } from 'formik';
import { Button } from '../Button/Button';
import { TextField } from '../TextField/TextField';
import { useRouter } from 'next/router';
import { useRegisterUser } from '@/views/hooks/useRegisterUser/useRegisterUser';

const initialValues = {
	username: '',
	password: '',
};

const validationSchema = {};
export const Register = () => {
	const [registerMutation] = useRegisterUser();
	const { push } = useRouter();

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={async ({ username, password }) => {
				const { data, errors } = await registerMutation({ variables: { inputs: { username, password } } });
				if (!!errors) {
					console.log(errors[0].message);
				} else if (data?.register?.id) {
					push('/');
				}
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
	);
};
