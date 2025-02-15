import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

interface InputProps {
  type: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  customStyle?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  customStyle,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="relative w-full">
      {/* Search Icon for Search Input */}
      {type === "search" && (
        <FiSearch
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={20}
        />
      )}

      <input
        type={type === "password" && showPassword ? "text" : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-4 border text-dark placeholder:text-sm placeholder:text-gray placeholder:opacity-60 border-grey focus:outline-none focus:ring-2 focus:ring-blue ${
          type === "search"
            ? "pl-12"
            : "" /* Adds left padding for search icon */
        } ${customStyle}`}
      />

      {/* Show/Hide Password Button */}
      {type === "password" && (
        <button
          type="button"
          className="absolute right-3 top-1/2 text-dark transform -translate-y-1/2 text-gray-600"
          onClick={handleTogglePassword}
        >
          {showPassword ? "SHOW" : "HIDE"}
        </button>
      )}
    </div>
  );
};

export default Input;
