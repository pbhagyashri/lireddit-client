import { Paper, Container, styled, Box } from '@mui/material';
import { ReactNode } from 'react';
import { Navbar } from './components/Navbar';

interface Props {
	children?: ReactNode;
}

const StyledPaper = styled(Paper)`
	min-height: 100vh;
`;

const StyledContainer = styled(Container)`
	background-color: ${({ theme }) => theme.palette.primary.light};
	min-height: 100vh;
	padding-left: ${({ theme }) => theme.spacing(3)};
	padding-right: ${({ theme }) => theme.spacing(3)};
	padding-bottom: ${({ theme }) => theme.spacing(3)};
`;

export const DefaultLayout = ({ children }: Props) => {
	return (
		<StyledContainer maxWidth='xl'>
			<StyledPaper elevation={1}>
				<Navbar />
				<Box py={3} px={{ sm: 2, md: 6, xl: 12 }}>
					{children}
				</Box>
			</StyledPaper>
		</StyledContainer>
	);
};
