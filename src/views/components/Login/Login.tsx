import { Form, Formik, FormikErrors } from 'formik';
import { useRouter } from 'next/router';
import { Stack, Typography } from '@mui/material';
import { FormWrapper } from '@components/FormWrapper';
import { useLoginUser } from '@hooks/useLoginUser/useLoginUser';
import { TextField } from '@components/TextField';
import { Button } from '@components/Button';
import * as Yup from 'yup';
import { LoginMutationVariables } from '@hooks/useLoginUser/useLoginUserMutation.generated';
import { useRecoilState } from 'recoil';
import { authState } from '@views/atoms/authAtom';

const initialValues = {
	email: '',
	password: '',
};

const LoginValidationSchema = Yup.object().shape({
	email: Yup.string().required('Required'),
	password: Yup.string().required('Required'),
});

export const Login = () => {
	const { push } = useRouter();
	const [loginMutation, { loading }] = useLoginUser();

	const [auth, setAuth] = useRecoilState(authState);

	if (loading) return <div>Loading...</div>;

	const handleSubmit = async (
		payload: LoginMutationVariables['inputs'],
		setErrors: (errors: FormikErrors<LoginMutationVariables['inputs']>) => void,
	) => {
		const { email, password } = payload;

		try {
			const { data } = await loginMutation({
				variables: { inputs: { email, password } },
			});

			// set token to application state
			setAuth(data?.login?.accessToken as string);

			push('/posts?limit=4');
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
						<TextField label='Email' type='text' name='email' placeholder='please enter your email' />
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
