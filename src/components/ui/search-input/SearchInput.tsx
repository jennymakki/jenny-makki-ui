"use client";

import Input from "../input/Input";
import Loader from "../loader/Loader";
import Button from "../button";
import { SearchInputProps } from "./SearchInput.types";
import { Search, X } from "lucide-react";

export default function SearchInput({
  onClear,
  loading,
  className = "",
  value,
  ...props
}: SearchInputProps) {
  const hasValue = Boolean(value);

  return (
    <div className="relative">
      <span className="absolute left-3 top-2.5 text-gray-400">
        <Search className="w-4 h-4" />
      </span>

      <Input
        {...props}
        value={value}
        className={`pl-9 pr-12 ${className}`}
      />

      <div className="absolute right-2 top-1.5 flex items-center gap-1">
        {loading && <Loader size="sm" />}

        {hasValue && onClear && (
          <Button
            type="button"
            variant="ghost"
            size="small"
            onClick={onClear}
            className="p-1 h-7 w-7 flex items-center justify-center"
          >
            <X className="w-4 h-4 text-gray-500" />
          </Button>
        )}
      </div>
    </div>
  );
}