import { useMeQuery } from '@/generated/graphql-types';
import { Stack, styled } from '@mui/material';
import { NavLink } from './NavLink';

const StyledNavbar = styled(Stack)`
	background-color: ${({ theme }) => theme.palette.primary.main};
`;

export const Navbar = () => {
	const { data, loading, error } = useMeQuery({});

	console.log({ data });
	console.log(loading);
	console.log(loading);

	return (
		<StyledNavbar direction='row-reverse' spacing={2} px={5} py={3}>
			<NavLink label='Login' path='/login' />
			<NavLink label='Register' path='/register' />
		</StyledNavbar>
	);
};
