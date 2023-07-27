import { render, screen } from '@views/test-helper';
import userEvent from '@testing-library/user-event';
import { CreatePost } from '.';
import * as CreatePostHook from '@hooks/useCreatePost';

jest.mock('~utils/useIsAuth');
jest.mock('@hooks/useCreatePost');

describe('<CreatePost />', () => {
	const { useCreatePost } = jest.mocked(CreatePostHook);

	const postMutation = jest.fn();

	beforeEach(() => {
		useCreatePost.mockReturnValue([postMutation, { error: undefined, loading: false, data: null }]);
	});

	it('should display create new post form', async () => {
		render(<CreatePost />);

		expect(screen.getByRole('heading', { name: 'Create Post' })).toBeInTheDocument();

		const titleField = screen.getByRole('textbox', { name: 'Title' });
		await userEvent.type(titleField, 'test title');
		expect(titleField).toHaveValue('test title');

		const bodyField = screen.getByRole('textbox', { name: 'Body' });
		expect(bodyField).toBeInTheDocument();
		await userEvent.type(bodyField, 'test body');
		expect(bodyField).toHaveValue('test body');

		const submitButton = screen.getByRole('button', { name: 'Create Post' });
		expect(submitButton).toBeInTheDocument();
		await userEvent.click(submitButton);
		expect(postMutation).toHaveBeenCalledWith({ variables: { title: 'test title', text: 'test body' } });
	});
});
