module.exports = {
  content: ['./public/**/*.{html,js}', './public/index.html'],
  theme: {
    extend: {
      screens: {
        sm: '576px',
      },
      textColor: {
        skin: {
          secondary: 'var(--lightest-slate)',
          accent: 'var(--slate)',
        },
      },
      colors: {
        skin: {
          navy: 'var(--navy)',
          'light-navy': 'var(--light-navy)',
          highlight: 'var(--green)',
          'lightest-slate': 'var(--lightest-slate)',
        },
      },
      fontFamily: {
        roboto: ['Roboto Mono', 'sans-serif'],
      },
      backgroundSize: {
        300: '300%',
      },
      animation: {
        text: 'text 3s linear infinite',
      },
      keyframes: {
        text: {
          '0%,100%': {
            backgroundPosition: 'left',
          },
          '50%': {
            backgroundPosition: 'right',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
