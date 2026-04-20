export type CardVariant = "default" | "outlined";

export interface CardProps {
  title?: string;
  variant?: CardVariant;
  children: React.ReactNode;
}