import { StyledNextLink } from '@components/NextLink/NextLink';
import { useMe } from '@hooks/useMeQuery/useMe';
import { Box, Link, Stack, Typography, styled } from '@mui/material';

import { useRouter } from 'next/router';

const StyledNavbar = styled(Stack)`
	background-color: ${({ theme }) => theme.palette.primary.main};
`;

export const Navbar = () => {
	const { push } = useRouter();
	const { me } = useMe();
	const { username } = me || {};

	return (
		<StyledNavbar direction='row' spacing={2} justifyContent='space-between' px={3} py={2}>
			<Box>
				<StyledNextLink href='/' label={username || ''} />
			</Box>
			<Stack direction='row' spacing={2}>
				<StyledNextLink href='/posts' label='Home' />
				{Boolean(username) ? (
					<Typography
						variant='h6'
						component={Link}
						color='common.white'
						onClick={() => {
							localStorage.removeItem('token');
							push('/posts/login');
						}}>
						Logout
					</Typography>
				) : (
					<StyledNextLink href='/posts/login' label='Login' />
				)}
				<StyledNextLink href='/posts/register' label='Register' />
				<StyledNextLink href='/posts/create-post' label='Create Post' />
			</Stack>
		</StyledNavbar>
	);
};
