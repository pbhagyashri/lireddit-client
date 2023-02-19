import { Button as MUIButton, ButtonProps, SxProps } from '@mui/material';

interface Props extends ButtonProps {
	label: string;
	onClick?: () => void;
	sx?: SxProps;
}

export const Button = ({ label, onClick, sx, ...rest }: Props) => {
	return (
		<MUIButton onClick={() => onClick?.()} {...rest} size='large' sx={{ width: 200, ...sx }}>
			{label}
		</MUIButton>
	);
};
