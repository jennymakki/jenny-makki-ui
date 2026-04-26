"use client";

import { ButtonProps } from "./Button.types";
import { buttonStyles } from "./Button.styles";
import Loader from "../loader/Loader";

export default function Button({
  variant = "primary",
  size = "medium",
  children,
  disabled = false,
  loading = false,
  onClick,
  type = "button",
  className = "",
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      aria-busy={loading}
      aria-disabled={isDisabled}
      className={`
        ${buttonStyles.base}
        ${buttonStyles.variants[variant]}
        ${buttonStyles.sizes[size]}
        ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
    >
      <span className="flex items-center gap-2">
        {loading && <Loader size="sm" />}
        {children}
      </span>
    </button>
  );
}