module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/hooks/**/*.{js,ts,jsx,tsx}',
    './src/utils/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cyberBlue: '#0A2540', // Deep, dark blue for backgrounds
        cyberGreen: '#00FF9D', // Neon green for accents
        cyberRed: '#FF3860', // Alert or danger color
        cyberPurple: '#7E22CE', // Secondary accent color
        cyberGray: '#1C1C1E', // Dark gray for text
        cyberTeal: '#08979C', // A teal shade for subtle highlights
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'], // For code-like elements
      },
      boxShadow: {
        neon: '0 0 10px 2px rgba(0, 255, 157, 0.7)', // Neon green shadow for glowing effects
      },
      backgroundImage: {
        'cyber-pattern': "url('/images/cyber-bg.png')", // Custom background image for a cyber theme
        'cyber-grid': "url('/images/cyber-grid.png')", // Cyber grid background
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
};
