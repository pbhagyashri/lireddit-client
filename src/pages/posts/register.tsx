import { DefaultLayout } from 'src/views/DefaultLayout';
import { Register } from 'src/views/components/Register';

const register = () => {
	return <DefaultLayout children={<Register />} />;
};

export default register;
