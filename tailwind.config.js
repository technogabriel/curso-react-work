import withMT from '@material-tailwind/react/utils/withMT';

// eslint-disable-next-line no-undef
module.exports = withMT({
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkbg: '#1e293b', // Ejemplo: azul oscuro (puedes cambiarlo)
        darktext: '#cbd5e1', // Ejemplo: texto claro para dark
      },
    },
  },
  plugins: [],
});