/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	// to fix page flickering and flashing
	compiler: {
		styledComponents: true,
	},
};

module.exports = nextConfig;
