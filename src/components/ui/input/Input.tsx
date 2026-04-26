"use client";

import { InputProps } from "./Input.types";

export default function Input({
  value,
  onChange,
  placeholder,
  type = "text",
  disabled = false,
  className = "",
  id,
}: InputProps) {
  return (
    <input
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      disabled={disabled}
      className={`
        border rounded-md px-3 py-2 w-full
        focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
    />
  );
}