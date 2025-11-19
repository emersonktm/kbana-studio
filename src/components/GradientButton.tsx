import { ReactNode } from "react";

interface GradientButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

const GradientButton = ({ children, onClick, className = "" }: GradientButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-4 rounded-full bg-gradient-to-r from-primary via-[hsl(330,80%,60%)] to-secondary text-white font-semibold text-lg transition-all duration-300 hover:shadow-[0_0_30px_hsl(270,80%,65%,0.5)] hover:scale-105 ${className}`}
    >
      {children}
    </button>
  );
};

export default GradientButton;
