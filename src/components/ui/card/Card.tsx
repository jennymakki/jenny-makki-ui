"use client";

import React from "react";
import { CardProps } from "./Card.types";
import { cardStyles } from "./Card.styles";

function Card({ variant = "default", children, className = "" }: CardProps) {
  return (
    <div className={`${cardStyles.base} ${cardStyles.variants[variant]} ${className}`}>
      {children}
    </div>
  );
}

function CardHeader({ children }: { children: React.ReactNode }) {
  return <div className="mb-4 font-semibold text-lg">{children}</div>;
}

function CardBody({ children }: { children: React.ReactNode }) {
  return <div className="text-sm text-gray-700">{children}</div>;
}

function CardFooter({ children }: { children: React.ReactNode }) {
  return <div className="mt-4 pt-4 border-t border-gray-100">{children}</div>;
}

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;