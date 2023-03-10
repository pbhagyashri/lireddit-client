import { Box, Stack, styled, Typography, capitalize } from '@mui/material';
import { NavLink } from './NavLink';
import { useMe } from '@/views/hooks/useMeQuery/useMe';

const StyledNavbar = styled(Stack)`
	background-color: ${({ theme }) => theme.palette.primary.main};
	position: sticky;
	top: 0;
	z-index: 999;
`;

export const Navbar = () => {
	const { data } = useMe();
	const { username } = data?.me || {};

	return (
		<StyledNavbar direction='row' justifyContent='space-between' alignItems='center' spacing={2} px={5} py={3}>
			<Typography variant='h4'>{username ? capitalize(username) : ''}</Typography>
			<Box>
				<NavLink label='Home' path='/' />
				{data?.me ? (
					<NavLink label='Logout' path='/login' onClick={() => localStorage.removeItem('token')} />
				) : (
					<NavLink label='Login' path='/login' />
				)}
				<NavLink label='Register' path='/register' />
			</Box>
		</StyledNavbar>
	);
};
