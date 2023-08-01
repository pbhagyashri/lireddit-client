import { render, screen } from '@views/test-helper';
import { Button } from './Button';
import userEvent from '@testing-library/user-event';

describe('<Button />', () => {
	const onClick = jest.fn();

	it('should render the button with the text', async () => {
		render(<Button label='click me' onClick={onClick} />);

		const button = screen.getByRole('button', { name: 'click me' });
		expect(button).toBeInTheDocument();

		await userEvent.click(button);
		expect(onClick).toHaveBeenCalledTimes(1);
	});
});
