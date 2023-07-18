import { Login } from '@components/Login';
import { DefaultLayout } from '../../views/DefaultLayout';

const login = () => {
	return <DefaultLayout children={<Login />} />;
};

export default login;
