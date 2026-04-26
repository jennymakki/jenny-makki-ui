export const buttonStyles = {
  base:
    "inline-flex items-center justify-center gap-2 rounded-md font-medium transition " +
    "focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98] " +
    "disabled:opacity-50 disabled:cursor-not-allowed",

  variants: {
    primary: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-400",

    secondary: "bg-gray-200 text-black hover:bg-gray-300 focus:ring-gray-400",

    ghost:
      "bg-transparent text-gray-900 hover:bg-gray-100 active:bg-gray-200 " +
      "focus:ring-gray-300",

    success: "bg-green-500 text-white hover:bg-green-600 focus:ring-green-400",

    danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-400",
  },

  sizes: {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2",
    large: "px-6 py-3 text-base",
  },
};
