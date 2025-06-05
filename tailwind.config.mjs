// tailwind.config.mjs
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["var(--font-outfit)"],
        ovo: ["var(--font-ovo)"],
      },
      
       gridTemplateColumns: {
  
  'auto-fit': 'repeat(auto-fit, minmax(200x, 1fr))',
}


      }

    },
 
  plugins: [],
}
