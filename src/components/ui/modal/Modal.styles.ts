export const modalStyles = {
  wrapper: "fixed inset-0 z-50 flex items-center justify-center",

  overlay:
    "absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity",

  content:
    "relative z-10 bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden",

  header: "px-6 py-4 border-b font-semibold text-lg",
  body: "px-6 py-4",
  footer: "px-6 py-4 border-t flex justify-end gap-2",
};