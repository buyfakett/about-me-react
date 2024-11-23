/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class', // 使用类模式切换暗黑模式
  theme: {
    extend: {
      animation: {
        orbit: "orbit calc(var(--duration)*1s) linear infinite",
      },
      keyframes: {
        orbit: {
          "0%": {
            transform:
                "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
          },
          "100%": {
            transform:
                "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
          },
        },
      },
    },
    animation: {
      "background-position-spin":
          "background-position-spin 3000ms infinite alternate",
    },
    keyframes: {
      "background-position-spin": {
        "0%": { backgroundPosition: "top center" },
        "100%": { backgroundPosition: "bottom center" },
      },
    },
  },
  plugins: [], // 确保插件格式正确
};
