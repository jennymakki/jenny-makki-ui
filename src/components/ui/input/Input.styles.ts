export const inputStyles = {
  wrapper: "flex flex-col gap-1",

  label: "text-sm font-medium text-gray-700",

  input:
    "w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm transition-all " +
    "placeholder:text-gray-400 " +
    "focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 " +
    "hover:border-gray-300",

  errorInput:
    "border-red-400 focus:ring-red-400 focus:border-red-500",

  errorText: "text-xs text-red-500 mt-1",

  hintText: "text-xs text-gray-400 mt-1",
};