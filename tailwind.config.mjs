/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx,mdx}'],
  transform: {
    mdx: (content) => mdx.sync(content),
  },
  theme: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')]
}
