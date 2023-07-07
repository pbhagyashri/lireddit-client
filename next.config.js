/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	// to fix page flickering and flashing
	compiler: {
		styledComponents: true,
	},
	async redirects() {
		return [
			{
				source: '/',
				destination: '/posts',
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;