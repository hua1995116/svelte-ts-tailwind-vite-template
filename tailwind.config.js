const production = process.env.NODE_ENV === 'production';
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: 'media',
  future: { 
    purgeLayersByDefault: true, 
    removeDeprecatedGapUtilities: true,
  },
  plugins: [],
  purge: {
    enabled: production,
    content: [
      './src/**/*.svelte'
    ]
  },
  theme: {
    colors: {
      orange: colors.orange,
      white: colors.white
    },
    extend: {
      minHeight: {
        '480': '480px'
      },
      maxWidth: {
        '320': '45rem'
      },
      spacing: {
        '10.5': '42px'
      }
    }
  }
};
