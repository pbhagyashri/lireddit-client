import { Register } from '@/views/components/Register';
import { DefaultLayout } from '@/views/DefaultLayout';

const register = () => {
	return <DefaultLayout children={<Register />} />;
};

export default register;
