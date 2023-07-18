import { render, screen } from '@views/test-helper';
import { Button } from './Button';

describe('<Button />', () => {
	const onClick = jest.fn();

	it('should render the button with the text', async () => {
		const { user } = render(<Button label='click me' onClick={onClick} />);

		const button = screen.getByRole('button', { name: 'my button' });
		expect(button).toBeInTheDocument();

		await user.click(button);
		expect(onClick).toHaveBeenCalledTimes(1);
	});
});
