import { Header } from '@/views/components/Header/Header';
import { DefaultLayout } from '@/views/DefaultLayout';

const register = () => {
	return <DefaultLayout children={<Header />} />;
};

export default register;
