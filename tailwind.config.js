module.exports = {
    mode: "jit",
    content: ["./src/**/*.{js,jsx,ts,tsx}", 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
    theme: {
      extend: {
        colors: {
          "dark-purple": "#081A51",
          "greenC": "#115A52",
          "greenCD": "#003C1F",
          "light-white": "rgba(255,255,255,0.17)",
        },
        
        fontFamily: {
          'poppins': ['Poppins', 'sans-serif']
        },
        
      },
    },
    plugins: [
      require('flowbite/plugin')
  ]
  };