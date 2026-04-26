"use client";

import Input from "../input/Input";
import { InputFieldProps } from "./InputField.types";

export default function InputField({
  label,
  error,
  hint,
  id,
  ...inputProps
}: InputFieldProps) {
  const generatedId =
    id ?? label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label
          htmlFor={generatedId}
          className="text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}

      <Input id={generatedId} {...inputProps} />

      {hint && !error && (
        <span className="text-xs text-gray-500">{hint}</span>
      )}

      {error && (
        <span className="text-xs text-red-500">{error}</span>
      )}
    </div>
  );
}