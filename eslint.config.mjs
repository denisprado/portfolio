import nextVitals from "eslint-config-next/core-web-vitals";

const config = [
	{
		ignores: [".next/**", "node_modules/**", "payload-types.ts"],
	},
	...nextVitals,
];

export default config;
