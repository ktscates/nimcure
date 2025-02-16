import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

interface InputProps {
  type: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  customStyle?: string;
  label?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  customStyle,
  label,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="relative">
      {/* Search Icon for Search Input */}
      {type === "search" && (
        <FiSearch
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray text-opacity-60"
          size={12}
        />
      )}

      <input
        type={type === "password" && showPassword ? "text" : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`border text-dark placeholder:text-sm placeholder:text-gray placeholder:opacity-60 border-grey focus:outline-none focus:ring-2 focus:ring-blue ${
          type === "search"
            ? "pl-8"
            : "" /* Adds left padding for search icon */
        } ${customStyle}`}
      />
      {/* Floating Label */}
      {label && (
        <label className="absolute left-2 top-1 px-1 text-sm text-gray-600">
          {label}
        </label>
      )}

      {/* Show/Hide Password Button */}
      {type === "password" && (
        <button
          type="button"
          className="absolute right-3 top-1/2 text-dark transform -translate-y-1/2 text-gray-600"
          onClick={handleTogglePassword}
        >
          {showPassword ? "HIDE" : "SHOW"}
        </button>
      )}
    </div>
  );
};

export default Input;
