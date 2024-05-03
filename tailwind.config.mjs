/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        columbia: "#BFD6F7",
        lemon: "#F7F3BF",
        pale: "#F7CDBF",
      },
    },
  },
  plugins: [],
};
