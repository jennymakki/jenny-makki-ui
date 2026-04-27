"use client";

import React from "react";
import { CardProps } from "./Card.types";
import { cardStyles } from "./Card.styles";

function Card({
  variant = "default",
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`${cardStyles.base} ${cardStyles.variants[variant]} ${className}`}
    >
      {children}
    </div>
  );
}

function CardHeader({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mb-3 text-lg font-semibold tracking-tight ${className}`}>
      {children}
    </div>
  );
}

function CardBody({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`space-y-3 text-sm text-gray-700 ${className}`}>
      {children}
    </div>
  );
}

function CardFooter({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mt-4 pt-4 border-t border-gray-100 flex items-center justify-end gap-2 ${className}`}
    >
      {children}
    </div>
  );
}

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;