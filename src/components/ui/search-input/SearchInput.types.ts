import type { InputProps } from "../input/Input.types";

export type SearchInputProps = InputProps & {
  onClear?: () => void;
  loading?: boolean;
};