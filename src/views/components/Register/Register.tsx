import { Stack, Typography } from '@mui/material';
import { Formik, Form } from 'formik';
import { Button } from '../Button/Button';
import { TextField } from '../TextField/TextField';
import { useRegisterMutation } from '@/generated/graphql-types';

const initialValues = {
	username: '',
	password: '',
};

const validationSchema = {};
export const Register = () => {
	const [register, { data, loading, error }] = useRegisterMutation();

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={async ({ username, password }, { setErrors }) => {
				await register({ variables: { inputs: { username, password } } });
			}}>
			<Form>
				<Stack spacing={2} sx={{ width: 600 }} direction='column'>
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
