"use client";

import { useState } from "react";
import { PasswordInputProps } from "./PasswordInput.types";
import { Eye, EyeOff } from "lucide-react";

import Input from "../input/Input";
import Button from "../button";

export default function PasswordInput({
  label,
  error,
  id,
  ...props
}: PasswordInputProps) {
  const [show, setShow] = useState(false);

  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

return (
  <div className="flex flex-col gap-1">
    {label && (
      <label
        htmlFor={inputId}
        className="text-sm font-medium text-gray-700"
      >
        {label}
      </label>
    )}

    <div className="relative">
      <Input
        {...props}
        id={inputId}
        type={show ? "text" : "password"}
      />

      <div className="absolute right-2 top-1.5">
        <Button
          type="button"
          variant="ghost"
          size="small"
          onClick={() => setShow(!show)}
          className="p-1"
        >
          {show ? (
            <EyeOff className="w-4 h-4 text-gray-500" />
          ) : (
            <Eye className="w-4 h-4 text-gray-500" />
          )}
        </Button>
      </div>
    </div>

    {error && (
      <span className="text-xs text-red-500">
        {error}
      </span>
    )}
  </div>
);
}