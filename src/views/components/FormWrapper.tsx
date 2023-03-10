import { Box } from '@mui/material';
import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}
export const FormWrapper = ({ children }: Props) => {
	return (
		<Box display='flex' justifyContent='center'>
			{children}
		</Box>
	);
};
