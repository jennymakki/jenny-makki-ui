import { InputProps } from "./Input.types";

export function Input({
    label,
    value,
    onChange,
    placeholder,
    error,
}: InputProps) {
    return (
        <div className="flex flex-col gap-1">
            {label && (
                <label className="text-sm font-medium text-gray-700">
                {label}
                </label>
            )}

            <input
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`border rounded px-3 py-2 focus:outline-none focus:ring-2 ${
                error ? "border-red-500" : "border-gray-300"
              }`}
              />

              {error && (
                <span className="text-sm text-red-500">{error}</span>
              )}
        </div>
    );
}