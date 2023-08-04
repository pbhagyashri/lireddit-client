import { TextField as MUITextField, StandardTextFieldProps, InputLabel, SxProps } from '@mui/material';
import { useFormTextField } from '@hooks/useFormTextField';

interface Props extends StandardTextFieldProps {
	label: string;
	type: string;
	name: string;
	sx?: SxProps;
}

export const TextField = ({ label, type, name, sx, ...rest }: Props) => {
	const { field, error, touched } = useFormTextField(name);

	return (
		<>
			<InputLabel htmlFor={label}>{label}</InputLabel>
			<MUITextField
				type={type}
				variant='outlined'
				{...rest}
				{...field}
				sx={{ ...sx }}
				fullWidth
				id={label}
				error={Boolean(error) && touched}
				helperText={(touched && error) || undefined}
			/>
		</>
	);
};
