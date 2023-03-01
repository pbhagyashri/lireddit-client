import { useMeQuery } from '../../hooks/useMeQuery/useMeQuery.generated';
import { Box, Stack, styled, Typography } from '@mui/material';
import { capitalize } from '../utils/intex';

import { NavLink } from './NavLink';

const StyledNavbar = styled(Stack)`
	background-color: ${({ theme }) => theme.palette.primary.main};
`;

export const Navbar = () => {
	const { data } = useMeQuery({
		fetchPolicy: 'no-cache',
	});

	const { username } = data?.me || {};

	return (
		<StyledNavbar direction='row' justifyContent='space-between' alignItems='center' spacing={2} px={5} py={3}>
			<Typography variant='h4'>{capitalize(username)}</Typography>
			<Box>
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
