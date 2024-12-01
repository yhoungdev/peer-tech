import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div
      className={`bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
