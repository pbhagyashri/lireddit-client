import { capitalizeFirstLetter } from '.';

describe('capitalizeFirstLetter', () => {
	it('should capitalize first letter', () => {
		expect(capitalizeFirstLetter('test')).toBe('Test');
	});
});
