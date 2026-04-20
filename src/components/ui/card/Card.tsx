"Use state";

import { CardProps } from "./Card.types";
import { cardStyles } from "./Card.styles";

export default function Card({
  title,
  variant = "default",
  children,
}: CardProps) {
  return (
    <div className={`${cardStyles.base} ${cardStyles.variants[variant]}`}>
      {title && <h3 className="font-semibold mb-4">{title}</h3>}
      {children}
    </div>
  );
}