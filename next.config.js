/** @type {import('next').NextConfig} */
export const nextConfig = {
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