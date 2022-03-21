const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

let withOpacity = (variableName) => {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

let screenSizes = {
	'xs'	: '360px',
	'sm'	: '640px', 		// d
	'md'	: '768px', 		// d
	'lg'	: '1024px',		// d
	'xl'	: '1280px',		// d
	// 'xl'	: '1366px',
	'2xl'	: '1536px',		// d
	'3xl'	: '1792px',
	'4xl'	: '1920px',
}

let brandColors = {
  "brand"		        : withOpacity("--brand"),
}

let textColors = {
	"default"    			: withOpacity("--text-default"),
	"muted"      			: withOpacity("--text-muted"),
	"light"      			: withOpacity("--LIGHT-BASE"),
	"dark"      			: withOpacity("--DARK-BASE"),
	"alt-t"        		: withOpacity("--text-alt"),
	"on-brand"    		: withOpacity("--on-brand"),
}

let bgColors = {
  "primary"					: withOpacity("--bg-primary"),
  "secondary"       : withOpacity("--bg-secondary"),
  "tertiary"        : withOpacity("--bg-tertiary"),
  "alt-b"           : withOpacity("--bg-alt"),
	"light"      			: withOpacity("--LIGHT-BASE"),
	"dark"      			: withOpacity("--DARK-BASE"),
	"black"						: colors.black,
}

let commonColors = {
	red			:{
		"light"						: colors.red[100],
		DEFAULT						: colors.red[500],
		"dark"						: colors.red[800],
	},
	green		:{
		"light"						: colors.green[100],
		DEFAULT						: colors.green[500],
		"dark"						: colors.green[800],
	},
	yellow	:{
		"light"						: colors.yellow[200],
		DEFAULT						: colors.yellow[500],
		"dark"						: colors.yellow[600],
	},
}

const config = {
  mode: "jit",
	darkMode: 'class',
  theme: {
    textColor : {
			...brandColors,
			...textColors,
			...commonColors,
		},
		backgroundColor : {
			...brandColors,
			...bgColors,
			...commonColors,
			transparent: 'transparent',
		},
    colors: {
      ...brandColors,
			...textColors,
      ...bgColors,
			...commonColors,
      current			: "currentColor",
			transparent	: 'transparent',
    },
    extend: {
      fontFamily: {
        body  	: ["var(--body-font)", ...defaultTheme.fontFamily.sans],
        heading	: ["var(--title-font)", ...defaultTheme.fontFamily.sans],
      },
			fontWeight: ['dark'],
			fill : ['dark'],
			screens: screenSizes,
		},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};

module.exports = config;
