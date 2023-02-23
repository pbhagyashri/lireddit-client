export const capitalize = (str?: string) => {
	if (!str) return;

	const words = [];

	for (let word of str.split(' ')) {
		words.push(word[0].toUpperCase() + word.slice(1));
	}

	return words.join(' ');
};
