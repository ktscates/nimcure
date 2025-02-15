import { ReactNode } from "react";

interface ButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
  className?: string; // Accepts custom Tailwind classes
  icon?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  text,
  className = "",
  icon,
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-full bg-blue mt-16 text-white text-xl font-semibold py-4 hover:bg-blue hover:bg-opacity-80 ${className}`} // Default + custom classes
    >
      {icon && <span className="mr-2">{icon}</span>}{" "}
      {/* Render icon if provided */}
      {text}
    </button>
  );
};

export default Button;
