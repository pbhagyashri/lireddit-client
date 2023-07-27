import { render, screen } from '@views/test-helper';
import userEvent from '@testing-library/user-event';
import { Login } from '@views/components/Login';
import * as LoginUserHook from '@hooks/useLoginUser/useLoginUser';

jest.mock('~utils/useIsAuth');
jest.mock('@hooks/useLoginUser/useLoginUser');

describe('<Login />', () => {
	const { useLoginUser } = jest.mocked(LoginUserHook);

	const loginUser = jest.fn();

	beforeEach(() => {
		useLoginUser.mockReturnValue([loginUser, { loading: false, error: undefined, data: null }]);
	});

	it('should display login form', async () => {
		render(<Login />);

		expect(screen.getByRole('heading', { name: 'Login' })).toBeInTheDocument();

		const useNameField = screen.getByRole('textbox', { name: 'Username' });
		expect(useNameField).toBeInTheDocument();
		await userEvent.type(useNameField, 'test username');
		expect(useNameField).toHaveValue('test username');

		const passwordField = screen.getByPlaceholderText('please enter your password');
		expect(passwordField).toHaveAttribute('type', 'password');
		await userEvent.type(passwordField, 'test password');
		expect(passwordField).toHaveValue('test password');

		const submitButton = screen.getByRole('button', { name: 'Login' });
		expect(submitButton).toBeInTheDocument();
		await userEvent.click(submitButton);
		expect(loginUser).toHaveBeenCalledWith({
			variables: { inputs: { username: 'test username', password: 'test password' } },
		});
	});
});
