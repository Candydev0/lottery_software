/** @type {import('tailwindcss').Config} */
const { nextui } = require('@nextui-org/react')
const colors = {
	primary: {
		50: '#F5F3FF',
		100: '#EDE9FE',
		200: '#DDD6FE',
		300: '#C4B5FD',
		400: '#A78BFA',
		500: '#8B5CF6',
		600: '#7C3AED',
		700: '#6D28D9',
		800: '#5B21B6',
		900: '#4C1D95',
		foreground: '#FFFFFF',
		DEFAULT: '#7C3AED',
	},
	secondary: {
		50: '#ECFDF5',
		100: '#D1FAE5',
		200: '#A7F3D0',
		300: '#6EE7B7',
		400: '#34D399',
		500: '#10B981',
		600: '#059669',
		700: '#047857',
		800: '#065F46',
		900: '#064E3B',
		foreground: '#FFFFFF',
		DEFAULT: '#10B981',
	},
	success: {
		50: '#E8FAF0',
		100: '#D1F4E0',
		200: '#A2E9C1',
		300: '#73DEA2',
		400: '#45D483',
		500: '#17C964',
		600: '#12A150',
		700: '#0D7D3C',
		800: '#085928',
		900: '#042614',
	},
	warning: {
		50: '#FFF7E6',
		100: '#FFEDC2',
		200: '#FFE199',
		300: '#FFD670',
		400: '#FFCC47',
		500: '#FFC21E',
		600: '#E6A81A',
		700: '#BF8C16',
		800: '#997012',
		900: '#72560E',
	},
	danger: {
		50: '#FCE8E8',
		100: '#F9D1D1',
		200: '#F3A2A2',
		300: '#ED7373',
		400: '#E64545',
		500: '#E01717',
		600: '#C01212',
		700: '#8D0D0D',
		800: '#590808',
		900: '#260404',
	},
}

module.exports = {
	content: [
		'./frontend/app/**/*.{ts,tsx}',
		'./frontend/components/**/*.{ts,tsx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
	},
	darkMode: 'class',
	plugins: [
		nextui({
			layout: {
				dividerWeight: '1.5px', // h-divider the default height applied to the divider component
				disabledOpacity: 0.4, // this value is applied as opacity-[value] when the component is disabled
				fontSize: {
					tiny: '0.75rem', // text-tiny
					small: '0.875rem', // text-small
					medium: '1rem', // text-medium
					large: '1.125rem', // text-large
				},
				lineHeight: {
					tiny: '1rem', // text-tiny
					small: '1.25rem', // text-small
					medium: '1.5rem', // text-medium
					large: '1.75rem', // text-large
				},
				radius: {
					small: '5px', // rounded-small
					medium: '8px', // rounded-medium
					large: '12px', // rounded-large
				},
				borderWidth: {
					small: '2px', // border-small
					medium: '3px', // border-medium (default)
					large: '5px', // border-large
				},
			}, // common layout styles
			themes: {
				light: {
					layout: {
						hoverOpacity: 0.8, //  this value is applied as opacity-[value] when the component is hovered
						boxShadow: {
							// shadow-small
							small:
								'0px 0px 5px 0px rgb(0 0 0 / 0.02), 0px 2px 10px 0px rgb(0 0 0 / 0.06), 0px 0px 1px 0px rgb(0 0 0 / 0.3)',
							// shadow-medium
							medium:
								'0px 0px 15px 0px rgb(0 0 0 / 0.03), 0px 2px 30px 0px rgb(0 0 0 / 0.08), 0px 0px 1px 0px rgb(0 0 0 / 0.3)',
							// shadow-large
							large:
								'0px 0px 30px 0px rgb(0 0 0 / 0.04), 0px 30px 60px 0px rgb(0 0 0 / 0.12), 0px 0px 1px 0px rgb(0 0 0 / 0.3)',
						},
					},
					colors: {
						background: '#ffffff',
						foreground: '#000000',
						focus: '#F182F6',
						...colors,
					},
				},
				dark: {
					layout: {
						hoverOpacity: 0.8, //  this value is applied as opacity-[value] when the component is hovered
						boxShadow: {
							small:
								'0px 0px 5px 0px rgb(0 0 0 / 0.02), 0px 2px 10px 0px rgb(0 0 0 / 0.06), 0px 0px 1px 0px rgb(0 0 0 / 0.3)',
							// shadow-medium
							medium:
								'0px 0px 15px 0px rgb(0 0 0 / 0.03), 0px 2px 30px 0px rgb(0 0 0 / 0.08), 0px 0px 1px 0px rgb(0 0 0 / 0.3)',
							// shadow-large
							large:
								'0px 0px 30px 0px rgb(0 0 0 / 0.04), 0px 30px 60px 0px rgb(0 0 0 / 0.12), 0px 0px 1px 0px rgb(0 0 0 / 0.3)',
						},
					},
					colors: {
						background: '#000000',
						foreground: '#ffff',
						focus: '#121212',
						...colors,
					},
				},
			},
		}),
	],
}
