import React from "react";

export type CardVariant = "default"  | "orange" | "outlined" | "elevated";

export interface CardProps {
  variant?: CardVariant;
  children: React.ReactNode;
  className?: string;
}