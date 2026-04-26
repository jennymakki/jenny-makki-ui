export const buttonStyles = {
  base:
    "inline-flex items-center justify-center rounded font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2",

  variants: {
    primary:
      "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-400 disabled:hover:bg-blue-500",
    secondary:
      "bg-gray-200 text-black hover:bg-gray-300 focus:ring-gray-400",
    form:
      "bg-green-500 text-white hover:bg-green-600 focus:ring-green-400",
  },

  sizes: {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2",
    large: "px-6 py-3 text-lg",
  },
};