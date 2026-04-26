import type { InputProps } from "../input/Input.types";

export type InputFieldProps = InputProps & {
  label?: string;
  error?: string;
  hint?: string;
};