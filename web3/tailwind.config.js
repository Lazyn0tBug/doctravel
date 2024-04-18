module.exports = {
  purge: {
    enabled: true,
    content: [
      '*.html',
        './src/**/*.{vue,js,ts}',
    ]
  },
  theme: {
    extend: {
      inset: {
        '100': '100%',
      }
    },
  },
  variants: {},
  plugins: [require("daisyui")],
}

