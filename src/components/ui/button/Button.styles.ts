export const buttonStyles = {
  base:
    "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all " +
    "focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.97] " +
    "disabled:opacity-50 disabled:cursor-not-allowed shadow-sm",

  variants: {
    primary:
      "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-400",

    secondary:
      "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-300",

    ghost:
      "bg-transparent text-gray-900 hover:bg-gray-100 active:bg-gray-200",

    success:
      "bg-emerald-500 text-white hover:bg-emerald-600 focus:ring-emerald-400",

    danger:
      "bg-red-500 text-white hover:bg-red-600 focus:ring-red-400",
  },

  sizes: {
    small: "h-9 px-3 text-sm",
    medium: "h-10 px-4 text-sm",
    large: "h-12 px-6 text-base",
  },
};