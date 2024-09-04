import { withPayload } from '@payloadcms/next/withPayload'



const NEXT_PUBLIC_SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['images.unsplash.com'],
	},
	reactStrictMode: true,

}

export default withPayload(nextConfig)