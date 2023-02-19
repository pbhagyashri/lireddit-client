import { useFormTextField } from '@/views/hooks/useFormTextField';
import { TextField as MUITextField, StandardTextFieldProps, InputLabel, SxProps } from '@mui/material';
import { errorMonitor } from 'events';
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
			<InputLabel>{label}</InputLabel>
			<MUITextField
				type={type}
				variant='outlined'
				{...rest}
				{...field}
				sx={{ ...sx }}
				fullWidth
				// error={!!error}
				// helperText={!!error ? error : undefined}
			/>
			<ErrorMessage name={name} />
		</>
	);
};
