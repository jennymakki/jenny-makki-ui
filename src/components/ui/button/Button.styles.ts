export const buttonStyles = {
  base:
    "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all " +
    "cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.97] " +
    "disabled:opacity-50 disabled:cursor-not-allowed shadow-sm",

  variants: {
    primary:
      "bg-[#F97316] text-white hover:bg-[#ea680c] focus:ring-[#fed7aa]",

    secondary:
      "bg-white text-[#F97316] border-2 border-[#F97316] " +
      "hover:bg-[#fff3e8] hover:border-[#F97316] " +
      "focus:ring-[#fed7aa]",

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