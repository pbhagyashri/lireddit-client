import { TextField as MUITextField, StandardTextFieldProps, InputLabel, SxProps } from '@mui/material';
import { useFormTextField } from '@hooks/useFormTextField';
import { ErrorMessage } from 'formik';

interface Props extends StandardTextFieldProps {
	label: string;
	type: string;
	name: string;
	sx?: SxProps;
}

export const TextField = ({ label, type, name, sx, ...rest }: Props) => {
	const { field } = useFormTextField(name);

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
				aria-label='title'
				id={label}
				// error={!!error}
				// helperText={!!error ? error : undefined}
			/>
			<ErrorMessage name={name} />
		</>
	);
};
