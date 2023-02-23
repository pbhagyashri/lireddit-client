import { styled } from '@mui/material';
import Link from 'next/link';

interface Props {
	path: string;
	label: string;
}

const StyledNavLink = styled(Link)`
	color: ${({ theme }) => theme.palette.common.white};
	font-weight: ${({ theme }) => theme.typography.fontWeightBold};
	font-size: ${({ theme }) => theme.typography.pxToRem(18)};
	text-decoration: none;
`;

export const NavLink = ({ path, label }: Props) => {
	return <StyledNavLink href={path}>{label}</StyledNavLink>;
};
