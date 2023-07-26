import theme from '@theme/theme';
import { Container } from '@mui/material';

export const Header = () => {
	return (
		<Container maxWidth='lg' sx={{ fontFamily: theme.typography.fontFamily }}>
			Header
		</Container>
	);
};
