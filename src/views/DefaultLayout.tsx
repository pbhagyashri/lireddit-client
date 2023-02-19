import { Paper, Container, styled } from '@mui/material';
import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

const StyledPaper = styled(Paper)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: ${({ theme }) => theme.spacing(2)};
	min-height: 100vh;
`;

const StyledContainer = styled(Container)`
	background-color: ${({ theme }) => theme.palette.primary.light};
	min-height: 100vh;
	padding: ${({ theme }) => theme.spacing(3)};
`;

export const DefaultLayout = ({ children }: Props) => {
	return (
		<StyledContainer maxWidth='xl'>
			<StyledPaper elevation={1}>{children}</StyledPaper>
		</StyledContainer>
	);
};
