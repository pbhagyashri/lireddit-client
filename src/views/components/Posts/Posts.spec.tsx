import { PostFactory } from '~utils/test-mocks/PostFactory';
import { Posts } from '.';
import * as GetPosts from '@hooks/useGetPosts';
import { render, screen } from '@views/test-helper';

jest.mock('@hooks/useGetPosts');
jest.mock('next/router', () => ({
	useRouter: jest.fn().mockReturnValue({
		query: {},
		push: () => {},
	}),
}));

describe('<Posts />', () => {
	const { useGetPosts } = jest.mocked(GetPosts);

	beforeEach(() => {
		useGetPosts.mockReturnValue({
			loading: false,
			error: undefined,
			posts: PostFactory.make(3),
		});
	});

	it('should display posts', () => {
		render(<Posts />);
		expect(screen.getAllByRole('region', { name: 'post' })).toHaveLength(3);
	});
});
