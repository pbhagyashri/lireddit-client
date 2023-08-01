import { Stack, CircularProgress, Typography, useTheme, alpha, CircularProgressProps } from '@mui/material';

interface Props extends CircularProgressProps {
	fullPage?: boolean;
	message?: string;
}

export const Spinner = ({ fullPage, message, sx }: Props) => {
	const theme = useTheme();

	if (fullPage) {
		return (
			<Stack
				sx={{
					...sx,
					backgroundColor: alpha(theme.palette.common.black, 0.5),
					minHeight: '100vh',
					minWidth: '100vw',
					justifyContent: 'center',
					alignItems: 'center',
					position: 'absolute',
					top: 0,
					left: 0,
				}}
				direction='column'>
				<CircularProgress sx={{ color: theme.palette.common.white }} />
				{message && (
					<Typography variant='h4' color='primary' sx={{ ml: 2, mt: 3, color: theme.palette.common.white }}>
						{message}
					</Typography>
				)}
			</Stack>
		);
	}

	return (
		<Stack
			sx={{
				...sx,
				height: '100%',
				justifyContent: 'center',
				alignItems: 'center',
			}}
			direction='column'>
			<CircularProgress sx={{ color: theme.palette.primary.dark }} />
			{message && (
				<Typography variant='h4' color='primary' sx={{ ml: 2, mt: 3, color: theme.palette.primary.dark }}>
					{message}
				</Typography>
			)}
		</Stack>
	);
};
