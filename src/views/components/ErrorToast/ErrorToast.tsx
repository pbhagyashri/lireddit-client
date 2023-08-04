import { ApolloError } from '@apollo/client';
import { Alert, Snackbar } from '@mui/material';
import { useEffect, useState } from 'react';

interface Props {
	error?: ApolloError;
	autoHideDuration?: number;
	verticalPosition?: 'top' | 'bottom';
	horizontalPosition?: 'left' | 'center' | 'right';
}

export const ErrorToast = ({
	error,
	autoHideDuration,
	horizontalPosition = 'center',
	verticalPosition = 'top',
}: Props) => {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		setOpen(Boolean(error));
	}, [error]);

	return (
		<Snackbar
			open={open}
			autoHideDuration={autoHideDuration || 2000}
			onClose={() => setOpen(false)}
			anchorOrigin={{ vertical: verticalPosition, horizontal: horizontalPosition }}>
			<Alert severity='error' sx={{ width: '100%' }}>
				{error?.message || 'Sorry, something went wrong, please try again later.'}
			</Alert>
		</Snackbar>
	);
};
