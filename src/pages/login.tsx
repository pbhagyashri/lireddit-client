import { Header } from '@/views/components/Header/Header';
import { DefaultLayout } from '@/views/DefaultLayout';

const login = () => {
	return <DefaultLayout children={<Header />} />;
};

export default login;
