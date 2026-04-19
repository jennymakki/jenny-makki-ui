import { CardProps } from "./Card.types";

export function Card({ title, children }: CardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
      
      {title && (
        <h3 className="text-lg font-semibold mb-4">
          {title}
        </h3>
      )}

      <div>{children}</div>
    </div>
  );
}