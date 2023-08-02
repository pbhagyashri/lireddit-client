import { render, screen } from '@views/test-helper';
import userEvent from '@testing-library/user-event';
import { PostDetails } from './PostDetails';

describe('<PostDetails />', () => {
	it('should display post details', async () => {
		render(
			<PostDetails
				post={{
					id: 1,
					title: 'title',
					text: 'post body',
					creatorId: 1,
					points: 1,
					createdAt: '123',
					creator: { id: 1, username: 'test' },
				}}
			/>,
		);
		expect(screen.getByRole('region', { name: 'post' })).toBeInTheDocument();
		expect(screen.getByRole('link', { name: 'title' })).toBeInTheDocument();
		expect(screen.getByRole('heading', { name: 'post body' })).toBeInTheDocument();

		// edit button and delete button should be visible
		// const editButton = screen.getByRole('button', { name: 'edit' });
		// expect(editButton).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'delete' })).toBeInTheDocument();

		// edit button should not be visible in edit mode
		// await userEvent.click(editButton);
		// expect(editButton).not.toBeInTheDocument();
	});
});
