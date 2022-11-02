module.exports = {
  content: ["./src/**/*.{html,js,jsx}",'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        
       'sans': ['Josefin Sans', "sans-serif"]
      },
      color: {
        'color-header': '#243c5a'
      }
    },
  },
  plugins: [
     require('flowbite/plugin')
  ],
}

