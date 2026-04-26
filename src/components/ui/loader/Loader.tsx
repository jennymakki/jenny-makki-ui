"use client";

import { LoaderProps } from "./Loader.types";
import { loaderStyles } from "./Loader.styles";

export default function Loader({
  size = "md",
  className = "",
}: LoaderProps) {
  return (
    <span
      className={`
        ${loaderStyles.base}
        ${loaderStyles.sizes[size]}
        ${className}
      `}
    />
  );
}