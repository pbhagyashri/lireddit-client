import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

export const DefaultLayout = ({ children }: Props) => {
	return (
		<Container maxWidth='lg'>
			<Box
				height='100%'
				display='flex'
				sx={{
					overflowY: 'auto',
					bgcolor: 'grey.4',
				}}>
				{children}
			</Box>
		</Container>
	);
};
