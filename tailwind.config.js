/** @type {import('tailwindcss').Config} */

import modal from "./src/features/Modal";

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: withOpacity("--background-app-rgb"),
        primary: withOpacity("--color-primary"),
        secondary: withOpacity("--color-secondary"),
        backgroundTitle: withOpacity("--background-title"),
        white: withOpacity("--color-white"),
        black: withOpacity("--color-black"),
        modal: withOpacity("--color-background-modal"),
        textColor: withOpacity("--color-texts"),
        quantityNumber: withOpacity("--color-quantity"),
        delete: withOpacity("--color-delete"),
        Inputs: withOpacity("--color-border"),
        titleH2: withOpacity("--color-h2"),
        btn: withOpacity("--color-btn"),
        backgroundLight: withOpacity("--background-app-light"),
        primaryLight: withOpacity("--color-primary-light"),
        modalLight: withOpacity("--color-background-modal-light"),
        textColorLight: withOpacity("--color-texts-light"),
        green: withOpacity("--color-green"),
      },
    },
  },
  plugins: [],
};
