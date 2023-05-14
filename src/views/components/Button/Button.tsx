import { Button as MUIButton, ButtonProps } from '@mui/material';

interface Props extends ButtonProps {
	label: string;
}

export const Button = ({ label, onClick, sx, ...rest }: Props) => {
	return (
		<MUIButton onClick={onClick} {...rest} size='large' sx={{ width: 200, ...sx }}>
			{label}
		</MUIButton>
	);
};
