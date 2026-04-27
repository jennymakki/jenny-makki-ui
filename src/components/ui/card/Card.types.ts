import React from "react";

export type CardVariant = "default" | "outlined" | "elevated";

export interface CardProps {
  variant?: CardVariant;
  children: React.ReactNode;
  className?: string;
}