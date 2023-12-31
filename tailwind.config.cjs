
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: ["light", "dark", "synthwave", {
			"my-theme": {
				"primary": "#ff0000",
				"secondary": "#00ff00",
				"accent": "#0000ff",
				"neutral": "#ffffff",
				"info": "#00ffff",
				"success": "#ffff00",
				"warning": "#ff00ff",
				"error": "#000000",
			},
		}], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
		darkTheme: "dark", // name of one of the included themes for dark mode
		base: true, // applies background color and foreground color for root element by default
		styled: true, // include daisyUI colors and design decisions for all components
		utils: true, // adds responsive and modifier utility classes
		rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
		prefix: "", // prefix
		logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
	},
};