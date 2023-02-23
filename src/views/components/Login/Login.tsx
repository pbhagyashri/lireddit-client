import { LoginDocument, MeDocument, MeQuery, useLoginMutation, useMeQuery } from '@/generated/graphql-types';
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
	const [loginMutation] = useLoginMutation();
	const { push } = useRouter();

	const handleSubmit = async (username: string, password: string) => {
		const { data } = await loginMutation({
			variables: { inputs: { username, password } },
			// update: (store, { data }) => {
			// 	const meData = store.readQuery<MeQuery>({ query: MeDocument });

			// 	store.writeQuery<MeQuery>({
			// 		query: MeDocument,
			// 		data: {
			// 			me: { __typename: meData?.me?.__typename, id: meData?.me?.id || '', username: meData?.me?.username || '' },
			// 		},
			// 	});
			// },
		});

		// TODO handle errors
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
