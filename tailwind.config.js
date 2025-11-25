module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        avelion: {
          primary: "var(--avelion-primary)",
          teal: "var(--avelion-teal)",
          mint: "var(--avelion-mint)",
          neutral: {
            50: "var(--avelion-neutral-50)",
            100: "var(--avelion-neutral-100)",
            200: "var(--avelion-neutral-200)",
            300: "var(--avelion-neutral-300)",
            400: "var(--avelion-neutral-400)",
            500: "var(--avelion-neutral-500)",
            600: "var(--avelion-neutral-600)",
            700: "var(--avelion-neutral-700)",
            800: "var(--avelion-neutral-800)",
            900: "var(--avelion-neutral-900)",
          },
        },
      },

      borderRadius: {
        soft: "var(--radius-soft)",
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
      },

      boxShadow: {
        card: "var(--shadow-card)",
        subtle: "var(--shadow-subtle)",
      },

      spacing: {
        layout: "var(--space-layout)",
        section: "var(--space-section)",
      },

      fontFamily: {
        sans: "var(--font-sans)",
        display: "var(--font-display)",
      },
    },
  },
  plugins: [],
};
