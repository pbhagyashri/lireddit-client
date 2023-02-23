import { Stack, Typography } from '@mui/material';
import { Formik, Form } from 'formik';
import { Button } from '../Button/Button';
import { TextField } from '../TextField/TextField';
import { useRegisterMutation } from '@/generated/graphql-types';
import { useRouter } from 'next/router';

const initialValues = {
	username: '',
	password: '',
};

const validationSchema = {};
export const Register = () => {
	const [register, { data, loading, error }] = useRegisterMutation();
	const { push } = useRouter();

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={async ({ username, password }) => {
				await register({ variables: { inputs: { username, password } } });
				if (!!error) {
					console.log(error.message);
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
						<Button variant='contained' type='submit' label='Register' disabled={loading} />
					</Stack>
				</Stack>
			</Form>
		</Formik>
	);
};
