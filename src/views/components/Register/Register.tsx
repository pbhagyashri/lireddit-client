import { Button } from '@components/Button';
import { FormWrapper } from '@components/FormWrapper';
import { TextField } from '@components/TextField';
import { useRegisterUser } from '@hooks/useRegisterUser/useRegisterUser';
import { Stack, Typography } from '@mui/material';
import { Formik, Form } from 'formik';
import { useRouter } from 'next/router';
import * as Yup from 'yup';

const initialValues = {
	username: '',
	password: '',
};

const SignupValidationSchema = Yup.object().shape({
	username: Yup.string().min(2, 'Too Short!').required('Required'),
	password: Yup.string().min(2, 'Too Short!').required('Required'),
});

export const Register = () => {
	const [registerMutation] = useRegisterUser();
	const { push } = useRouter();

	return (
		<FormWrapper>
			<Formik
				initialValues={initialValues}
				validationSchema={SignupValidationSchema}
				onSubmit={async (payload, { setErrors, setSubmitting }) => {
					try {
						const { username, password } = payload;
						const { data } = await registerMutation({ variables: { inputs: { username, password } } });
						localStorage.setItem('token', `${data?.register?.token}`);
						push('/posts');
						// TODO: figure out better type for error
						// eslint-disable-next-line @typescript-eslint/no-explicit-any
					} catch (error: any) {
						setSubmitting(false);
						setErrors({ [error?.graphQLErrors[0].extensions.argumentName]: error?.message });
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
		</FormWrapper>
	);
};
