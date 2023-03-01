import { useLoginUser } from '@/views/hooks/useLoginUser/useLoginUser';
import { Stack, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';
import { Button } from '../Button/Button';
import { TextField } from '../TextField/TextField';

const initialValues = {
	username: '',
	password: '',
};

export const Login = () => {
	const { push } = useRouter();
	const [loginMutation] = useLoginUser();

	const handleSubmit = async (username: string, password: string) => {
		const { data } = await loginMutation({
			variables: { inputs: { username, password } },
		});

		localStorage.setItem('token', `${data?.login}`);
		push('/');
	};

	return (
		<Formik initialValues={initialValues} onSubmit={({ username, password }) => handleSubmit(username, password)}>
			<Form>
				<Stack spacing={2} direction='column' width={{ xs: 400, sm: 600 }} pt={5}>
					<Typography variant='h1'>Login</Typography>
					<TextField label='Username' type='text' name='username' />
					<TextField label='Password' type='password' name='password' />
					<Stack direction='row-reverse'>
						<Button variant='contained' type='submit' label='Login' />
					</Stack>
				</Stack>
			</Form>
		</Formik>
	);
};
