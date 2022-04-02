import { defineConfig } from "windicss/helpers";
export default defineConfig({
  attributify: true,
  darkMode: "class",
  theme: {
    screens: {
      xs: "370px",
      // => @media (min-width: 370px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  shortcuts: {
    btn: "py-2 px-4 font-semibold rounded-lg shadow-md",
    "btn-green": "text-white bg-green-500 hover:bg-green-700",
    header_text: "no-underline text-teal-500 font-semibold tracking-tight",
    category:
      "font-medium text-xl tracking-tight text-gray-800 uppercase underline decoration-teal-500",
    tableheader:
      "border-l font-medium bg-dark-900 border-light-50  text-md text-left text-teal-500",
    backtodashboardbtn:
      "rounded-lg m-auto   text-base text-center mb-6 p-3   transform transition text-teal-500 w-[14rem] duration-500 hover:(cursor-pointer bg-teal-500 text-white scale-102) ",
  },
});
