module.exports = {
    content: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
    ],
    theme: {
      extend: {
        transitionDuration: {
          '2000': '2000ms', 
        },
        fontFamily: {
          signature: ['Dancing Script', 'cursive'],
        },
        colors: {
          primaryDark: 'var(--primary-color)',
          accent: 'var(--accent-color)',
          black: 'var(--black-color)',
          gray: 'var(--gray-color)',
          whiteGray: 'var(--white-gray)',
          darkGray:'var(--dark-gray)',
          darkAccent:'var(--dark-accent)',
        },
         screens: {
            xs: '350px',
            sm: '576px',
            md: '768px',
            mmd: '880px',
            lg: '992px',
            xl: '1024px',
            xxl: '1200px',
            xxxl: '1400px'
          },
      },
    },
    plugins: [],
  }
  