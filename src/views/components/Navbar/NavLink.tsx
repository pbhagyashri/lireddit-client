import { styled } from '@mui/material';
import Link from 'next/link';

interface Props {
	path: string;
	label: string;
	onClick?: () => void;
}

const StyledNavLink = styled(Link)`
	color: ${({ theme }) => theme.palette.common.white};
	font-weight: ${({ theme }) => theme.typography.fontWeightBold};
	font-size: ${({ theme }) => theme.typography.pxToRem(18)};
	text-decoration: none;
	margin-left: ${({ theme }) => theme.spacing(2)};
`;

export const NavLink = ({ path, label, onClick }: Props) => {
	return (
		<StyledNavLink href={path} onClick={() => onClick?.()}>
			{label}
		</StyledNavLink>
	);
};
