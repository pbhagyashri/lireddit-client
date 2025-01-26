import { styled, LinkProps } from '@mui/material';
import Link from 'next/link';

interface Props extends LinkProps {
	href: string;
	label?: string;
	sx?: LinkProps['sx'];
}

const StyledLink = styled(Link)`
	text-decoration: none;
	color: ${({ theme }) => theme.palette.common.white};
	font-weight: ${({ theme }) => theme.typography.fontWeightBold};
	cursor: pointer;
`;

export const StyledNextLink = ({ href, label, sx }: Props) => {
	return (
		<StyledLink href={href} sx={sx}>
			{label}
		</StyledLink>
	);
};
