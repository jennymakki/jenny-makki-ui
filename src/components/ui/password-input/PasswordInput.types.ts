import type { InputProps } from "../input/Input.types";

export type PasswordInputProps = InputProps & {
  label?: string;
  error?: string;
};