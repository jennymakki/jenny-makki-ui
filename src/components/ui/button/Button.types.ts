export type ButtonVariant = "primary" | "secondary" | "form";;

export type ButtonSize = "small" | "medium" | "large";

export interface ButtonProps {
    variant?: ButtonVariant;
    size?: ButtonSize;
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    loading?: boolean;
}