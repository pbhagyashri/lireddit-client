import { useLoginMutation, useMeQuery } from '@/generated/graphql-types';
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
	const [login, { data, loading, error }] = useLoginMutation();
	const { push } = useRouter();

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={async ({ username, password }) => {
				await login({ variables: { inputs: { username, password } } });
				if (!!error) {
					console.log(error.message);
				} else if (data?.login) {
					localStorage.setItem('token', data?.login);
					push('/');
				}
			}}>
			<Form>
				<Stack spacing={2} direction='column' width={{ xs: 400, sm: 600 }} pt={5}>
					<Typography variant='h1'>Login</Typography>
					<TextField label='Username' type='text' name='username' />
					<TextField label='Password' type='password' name='password' />
					<Stack direction='row-reverse'>
						<Button variant='contained' type='submit' label='Login' disabled={loading} />
					</Stack>
				</Stack>
			</Form>
		</Formik>
	);
};
