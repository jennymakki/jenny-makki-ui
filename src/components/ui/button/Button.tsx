import { ButtonProps } from "./Button.types";
import { buttonStyles } from "./Button.styles";

export function Button({
    variant = "primary",
    size = "medium",
    children,
    disabled = false,
    loading = false,
    onClick,
}: ButtonProps) {
    return (
        <button
        onClick={onClick}
        disabled={disabled || loading}
        className={`
            ${buttonStyles.base}
            ${buttonStyles.variants[variant]}
            ${buttonStyles.sizes[size]}
            ${(disabled || loading) ? "opacity-50 cursor-not-allowed" : ""}
        `}
        >
            {loading ? "Loading..." : children}
        </button>
    );
}