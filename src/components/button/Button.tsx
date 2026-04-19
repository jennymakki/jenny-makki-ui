import { ButtonProps } from "./Button.types";
import { buttonStyles } from "./Button.styles";

export function Button({
    variant = "primary",
    size = "medium",
    children,
    disabled = false,
    onClick,
}: ButtonProps) {
    return (
        <button
        onClick={onClick}
        disabled={disabled}
        className={`
            ${buttonStyles.base}
            ${buttonStyles.variants[variant]}
            ${buttonStyles.sizes[size]}
            ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        `}
        >
            {children}
        </button>
    );
}