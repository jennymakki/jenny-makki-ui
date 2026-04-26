import type { ChangeEventHandler } from "react";

export type InputProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  type?: "text" | "email" | "password";
  disabled?: boolean;
  className?: string;
  id?: string;
};