import { useTheme } from '@mui/material';
import Link from 'next/link';

interface Props {
	href: string;
	label: string;
}

export const StyledNextLink = ({ href, label }: Props) => {
	const theme = useTheme();

	return (
		<Link
			href={href}
			style={{
				textDecoration: 'none',
				color: theme.palette.primary.main,
				fontWeight: theme.typography.fontWeightBold,
			}}>
			{label}
		</Link>
	);
};
