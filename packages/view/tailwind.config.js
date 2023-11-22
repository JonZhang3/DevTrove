import { radixThemePreset } from "radix-themes-tw";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  presets: [radixThemePreset],
  theme: {
    extend: {},
  },
  plugins: [],
};
