import { Form, Formik, FormikErrors } from 'formik';
import { useRouter } from 'next/router';
import { Stack, Typography } from '@mui/material';
import { FormWrapper } from '@components/FormWrapper';
import { useLoginUser } from '@hooks/useLoginUser/useLoginUser';
import { TextField } from '@components/TextField';
import { Button } from '@components/Button';
import * as Yup from 'yup';
import { LoginMutationVariables } from '@hooks/useLoginUser/useLoginUserMutation.generated';

const initialValues = {
	username: '',
	password: '',
};

const LoginValidationSchema = Yup.object().shape({
	username: Yup.string().required('Required'),
	password: Yup.string().required('Required'),
});

export const Login = () => {
	const { push, query } = useRouter();
	const [loginMutation] = useLoginUser();

	const handleSubmit = async (
		payload: LoginMutationVariables['inputs'],
		setErrors: (errors: FormikErrors<LoginMutationVariables['inputs']>) => void,
	) => {
		const { username, password } = payload;

		try {
			const { data } = await loginMutation({
				variables: { inputs: { username, password } },
			});

			localStorage.setItem('token', `${data?.login}`);

			if (typeof query.next === 'string') {
				push(query.next);
			} else {
				push('/posts');
			}
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			setErrors({ [error?.graphQLErrors[0].extensions.argumentName]: error?.message });
		}
	};

	return (
		<FormWrapper>
			<Formik
				initialValues={initialValues}
				validationSchema={LoginValidationSchema}
				onSubmit={(payload, { setErrors }) => handleSubmit(payload, setErrors)}>
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
