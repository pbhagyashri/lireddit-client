import { render, screen } from '@views/test-helper';
import { CreatePost } from '.';

jest.mock('~utils/useIsAuth');

describe('CreatePost', () => {
	beforeEach(() => {});

	it('should display create new post form', () => {
		render(<CreatePost />);

		expect(screen.getByRole('heading', { name: 'Create Post' })).toBeInTheDocument();

		// expect(screen.getByRole('textbox', { name: 'post title' })).toBeInTheDocument();
		// expect(screen.getByRole('textbox', { name: 'post body' })).toBeInTheDocument();
		// expect(screen.getByRole('button', { name: 'Create Post' })).toBeInTheDocument();
	});
});
