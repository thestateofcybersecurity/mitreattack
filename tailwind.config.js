module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyberBlue: '#0A2540',
        cyberGreen: '#00FF9D',
        cyberRed: '#FF3860',
        cyberPurple: '#7E22CE',
        cyberGray: '#1C1C1E',
        cyberTeal: '#08979C',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      boxShadow: {
        neon: '0 0 10px 2px rgba(0, 255, 157, 0.7)',
      },
      backgroundImage: {
        'cyber-pattern': "url('/images/cyber-bg.png')",
        'cyber-grid': "url('/images/cyber-grid.png')",
      },
      animation: {
        glitch: 'glitch 1s infinite',
        fadeIn: 'fadeIn 2s ease-in-out',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { clip: 'rect(10px, 9999px, 5px, 0)' },
          '50%': { clip: 'rect(20px, 9999px, 10px, 0)', transform: 'skew(0.5deg)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
