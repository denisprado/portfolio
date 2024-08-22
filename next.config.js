const { withPayload } = require("@payloadcms/next/withPayload");
/** @type {import('next').NextConfig} */
const removeImports = require('next-remove-imports')();
module.exports = withPayload(removeImports({}));
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'mlfoassvjfdizqvcrgjx.supabase.co',
				port: '',
				pathname: '/storage/v1/object/public/project-images/images/**',
			},
		],
		//http://localhost:3002/trabalho/(https://mlfoassvjfdizqvcrgjx.supabase.co/storage/v1/object/public/images/c4011fa8-12e4-4216-9814-37411064a20d/christopher-gower-m_HRfLhgABo-unsplash.jpg)
	}
};

module.exports = nextConfig;
