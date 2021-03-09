const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	important: false,
	separator: ':',
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				authform: 'url("/assets/img/gift-white-bg.jpeg")',
			}),
			transitionDuration: ['hover', 'focus'],
		},
		colors: {
			...defaultTheme.colors,
			primary: '#343a40',
			'primary-hover': '#ff5c6f',

			blue: '#333a64',

			grey: '#9a9a9a',
			'grey-light': '#d6d6d6',

			yellow: '#ffbb59',
			dark: '#313131',

			signup: '#FFC19C',
			'signup-darker': '#f7cdb5',

			error: '#FF0000',

			'form-primary': '#FF5F6D',
			'form-secondary': '#ffc371',
		},
		fontFamily: {
			// default font-families, adapt to what we need
			crayoncrumble: ['DK-Crayon-Crumble'],
			crayoncool: ['DK-Cool-Crayon'],
			quicksand: ['Quicksand'],
			sans: [
				'system-ui',
				'BlinkMacSystemFont',
				'-apple-system',
				'Segoe UI',
				'Roboto',
				'Oxygen',
				'Ubuntu',
				'Cantarell',
				'Fira Sans',
				'Droid Sans',
				'Helvetica Neue',
				'sans-serif',
			],
			serif: [
				'Constantia',
				'Lucida Bright',
				'Lucidabright',
				'Lucida Serif',
				'Lucida',
				'DejaVu Serif',
				'Bitstream Vera Serif',
				'Liberation Serif',
				'Georgia',
				'serif',
			],
			mono: ['Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
		},
		fontSize: {
			...defaultTheme.fontSize,
			// set our font sizes here e.g. '2xs': '0.625rem'
			// '2xs': '',
			// xs: '',
			// sm: '',
			// base: '',
			// lg: '1.15em',
			// xl: '1.2em',
			// '2xl': '',
			// '3xl': '',
			// '4xl': '',
			// '5xl': '',
		},
		borderColor: (theme) => ({
			// apply our colors to border colors as well
			...theme('colors'),
			// set a default border color
			// e.g. default: theme('colors.main-hover', 'currentColor'),
			default: theme('colors.grey-light', 'currentColor'),
		}),
	},
	// https://tailwindcss.com/docs/configuring-variants
	variants: {
		appearance: ['responsive'],
		backgroundAttachment: ['responsive'],
		backgroundColor: ['responsive', 'hover', 'focus'],
		backgroundPosition: ['responsive'],
		backgroundRepeat: ['responsive'],
		backgroundSize: ['responsive'],
		borderCollapse: [],
		borderColor: ['responsive', 'hover', 'focus'],
		borderRadius: ['responsive'],
		borderStyle: ['responsive'],
		borderWidth: ['responsive'],
		cursor: ['responsive', 'hover'],
		display: ['responsive'],
		flexDirection: ['responsive'],
		flexWrap: ['responsive'],
		alignItems: ['responsive'],
		alignSelf: ['responsive'],
		justifyContent: ['responsive'],
		alignContent: ['responsive'],
		flex: ['responsive'],
		flexGrow: ['responsive'],
		flexShrink: ['responsive'],
		float: ['responsive'],
		fontFamily: false,
		fontWeight: ['responsive', 'hover', 'focus'],
		height: ['responsive'],
		lineHeight: ['responsive'],
		listStylePosition: ['responsive'],
		listStyleType: ['responsive'],
		margin: ['responsive'],
		maxHeight: ['responsive'],
		maxWidth: ['responsive'],
		minHeight: ['responsive'],
		minWidth: ['responsive'],
		negativeMargin: ['responsive'],
		opacity: ['responsive'],
		outline: ['focus'],
		overflow: ['responsive'],
		padding: ['responsive'],
		pointerEvents: ['responsive'],
		position: ['responsive'],
		inset: ['responsive'],
		resize: ['responsive'],
		boxShadow: ['responsive', 'hover', 'focus'],
		fill: [],
		stroke: [],
		tableLayout: ['responsive'],
		textAlign: ['responsive'],
		textColor: ['responsive', 'hover', 'focus'],
		fontSize: ['responsive'],
		fontStyle: ['responsive', 'hover', 'focus'],
		fontSmoothing: ['responsive', 'hover', 'focus'],
		textDecoration: ['responsive', 'hover', 'focus'],
		textTransform: ['responsive', 'hover', 'focus'],
		letterSpacing: ['responsive'],
		userSelect: ['responsive'],
		verticalAlign: ['responsive'],
		visibility: ['responsive'],
		whitespace: ['responsive'],
		wordBreak: ['responsive'],
		width: ['responsive'],
		zIndex: ['responsive'],
	},
};
