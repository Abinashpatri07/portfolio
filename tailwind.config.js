/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        portfolio: {
          bg: '#f7f8f4',
          surface: '#ffffff',
          'surface-soft': '#eaf0e8',
          dark: '#203a2d',
          text: '#1d2725',
          muted: '#64706a',
          accent: '#568b6d',
          'accent-light': '#70ab82',
          'accent-hover': '#456d50',
          border: '#e3e8e0',
          'border-strong': '#cbdccc',
        }
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        heading: ['"Manrope"', 'sans-serif'],
        accent: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      maxWidth: {
        container: '1190px',
      },
      boxShadow: {
        card: '0 14px 35px rgba(32, 58, 45, 0.08)',
        'card-hover': '0 20px 45px rgba(32, 58, 45, 0.14)',
      }
    },
  },
  plugins: [],
};

