export const buttonStyles = {
  base:
    "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all " +
    "focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.97] " +
    "disabled:opacity-50 disabled:cursor-not-allowed shadow-sm",

  variants: {
    primary:
      "bg-[#E85AAD] text-white hover:bg-[#d94a9c] focus:ring-[#f3a4cf]",

secondary:
  "bg-white text-[#E85AAD] border-2 border-[#E85AAD] " +
  "hover:bg-[#E85AAD] hover:text-white hover:border-[#E85AAD] " +
  "focus:ring-[#f3a4cf]",

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