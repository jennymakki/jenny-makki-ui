export type ButtonVariant = "primary" | "secondary";

export type ButtonSize = "small" | "medium" | "large";

export interface ButtonProps {
    variant?: ButtonVariant;
    size?: ButtonSize;
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
}