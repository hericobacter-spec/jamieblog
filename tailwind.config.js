module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./content/**/*.{md,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        aurora: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Text', 'SF Pro Display', 'Work Sans', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        aurora: {
          50: '#f8fbff',
          100: '#eef6ff',
          200: '#d6e9ff',
          300: '#9ecfff',
          400: '#66a8ff',
          500: '#3b82f6',
          600: '#2b6fd6',
          700: '#1f4fa8',
          800: '#153770',
          900: '#0b2346'
        }
      }
    }
  },
  plugins: []
}
