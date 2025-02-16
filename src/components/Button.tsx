import { ReactNode } from "react";

interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
  className?: string;
  icon?: ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  text,
  className = "",
  icon,
  type = "button",
  disabled,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };
  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={`py-4 ${className}`}
    >
      {icon && <span className="mr-2">{icon}</span>} {text}
    </button>
  );
};

export default Button;
