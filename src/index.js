const plugin = require('tailwindcss/plugin');
const gradients = require('./gradients');

module.exports = plugin(
  ({ addUtilities, variants }) => {
    const gradientUtils = {};

    Object.keys(gradients).map((gradient) => {
      gradientUtils[`.bg-webgradient-${gradient}`] = gradients[gradient];
    });

    addUtilities(gradientUtils, variants('webGradient'));
  },
  {
    variants: {
      webGradient: ['responsive'],
    },
  },
);
