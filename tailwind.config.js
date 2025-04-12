/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light theme
        'pearl-bush-light': '#131112',
        'dark-grey-light': '#353535',
        'grenadier-light': '#D74108',
        'foggy-grey-light': '#CBC8B9',
        
        // Dark theme
        'pearl-bush-dark': '#CBC8B9',
        'dark-grey-dark': '#E0E0E0',
        'grenadier-dark': '#FF5C2C',
        'foggy-grey-dark': '#1E1E1E',

        // Theme variables
        background: 'var(--background)',
        'card-background': 'var(--card-background)',
        border: 'var(--border)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-accent': 'var(--text-accent)',
        'button-primary': 'var(--button-primary)',
        'button-primary-text': 'var(--button-primary-text)',
        'button-secondary': 'var(--button-secondary)',
        'button-secondary-text': 'var(--button-secondary-text)',
      },
      fontFamily: {
        'ibarra': ['Ibarra Real Nova', 'serif'],
        'helvetica': ['Helvetica', 'system-ui', 'sans-serif']
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.16' }],
        '6xl': ['3.75rem', { lineHeight: '1.15' }],
      },
    },
  },
  plugins: [],
}