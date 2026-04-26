import type { MouseEventHandler, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "form";

export type ButtonSize = "small" | "medium" | "large";

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
}