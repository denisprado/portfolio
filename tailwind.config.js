/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-source)'],
				mono: ['var(--font-source-code)'],
			},
			colors: {
				primary: "#5072B7",
				primaryDark: "#89A3D4",
				secondary: "#B7C5E5",
				accent: "#14B6A9",
				neutral: "#EDEEF0",
				black: '#111',
				'neutral-dark-3': "#38383D",
				'neutral-dark-2': "#3C3C42",
				'neutral-dark-1': "#45464E",
				'neutral-light-3': "#A1A4A8",
				'neutral-light-2': "#C7C9CC",
				'neutral-light-1': "#EDEEF0",
			},
			minHeight: {
				screenHeightWithoutHeader: 'calc(100vh - 101px)'
			},
			height: {
				screenHeightWithoutHeader: 'calc(100vh - 101px)'
			}
		},
	},
	plugins: [],
}

