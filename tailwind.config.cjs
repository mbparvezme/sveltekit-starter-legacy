const config = {
  presets: [
    require('./tailwind.config.preset.cjs')
  ],
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
  },

  plugins: [],
};

module.exports = config;
