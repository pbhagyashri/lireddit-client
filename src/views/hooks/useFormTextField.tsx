import { useField } from 'formik';

export function useFormTextField(name: string) {
	const [field, meta, helpers] = useField(name);

	return {
		field,
		error: meta.error,
		touched: meta.touched,
		helpers,
	};
}
