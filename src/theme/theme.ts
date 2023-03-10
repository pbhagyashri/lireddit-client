import { Roboto } from '@next/font/google';
import { createTheme } from '@mui/material/styles';
import palette from './palette.json';

export const roboto = Roboto({
	weight: ['300', '400', '500', '700'],
	subsets: ['latin'],
	display: 'swap',
	fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

const defaultTheme = createTheme();

// Create a theme instance.
const theme = createTheme({
	palette: {
		primary: {
			light: palette.primaryColorLight,
			main: palette.primaryColorMain,
		},
		error: {
			main: palette.error,
		},
		warning: {
			main: palette.warning,
		},
	},
	typography: {
		fontFamily: ['museo-sans', 'open-sans', 'sans-serif', 'Arial', 'Helvetica Neue', 'Helvetica'].join(','),
		h1: {
			fontSize: defaultTheme.typography.pxToRem(40),
			color: palette.primaryColorDark,
		},
		h2: {
			fontSize: defaultTheme.typography.pxToRem(28),
		},
		h3: {
			fontSize: defaultTheme.typography.pxToRem(24),
		},
		h4: {
			fontSize: defaultTheme.typography.pxToRem(20),
		},
		h5: {
			fontSize: defaultTheme.typography.pxToRem(16),
			fontWeight: defaultTheme.typography.fontWeightMedium,
		},
		h6: {
			fontSize: defaultTheme.typography.pxToRem(16),
			fontWeight: defaultTheme.typography.fontWeightBold,
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					fontSize: defaultTheme.typography.pxToRem(17),
					fontWeight: defaultTheme.typography.fontWeightBold,
					color: defaultTheme.palette.common.white,
				},
			},
		},
		MuiLink: {
			styleOverrides: {
				root: {
					color: palette.primaryColorMain,
					fontWeight: defaultTheme.typography.fontWeightBold,
					textDecoration: 'none',
					cursor: 'pointer',
				},
			},
		},
	},
});

export default theme;
