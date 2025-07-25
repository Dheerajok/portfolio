const defaultTheme = require("tailwindcss/defaultTheme");
 
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {

		backgroundImage: {

			BannerImg1: "url('https://res.cloudinary.com/dmuszfenu/image/upload/fl_preserve_transparency/v1747505837/b1_hpsq9z.jpg?_s=public-apps')",
			BannerImg2: "url('https://res.cloudinary.com/djqya1k8g/image/upload/v1753388083/Untitled_design_1_hcknqh.png')",
			BannerImg3: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuztQv2OC4RkixOzT3vHh0eODBHk8cBxQZtA&s')",
			BannerImg4: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuztQv2OC4RkixOzT3vHh0eODBHk8cBxQZtA&s')",

		},

		animation: {
			scroll:
			  "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
		  },
		  keyframes: {
			scroll: {
			  to: {
				transform: "translate(calc(-50% - 0.5rem))",
			  },
			},
		  },
		
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate"),addVariablesForColors],

};


function addVariablesForColors({
	addBase,
	theme
  }) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));
  
	addBase({
	  ":root": newVars,
	});
  }
  