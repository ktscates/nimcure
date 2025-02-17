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
    <div className="relative w-full">
      <input
        type={type === "password" && showPassword ? "text" : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`peer border text-dark placeholder:text-gray placeholder-transparent border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 px-3 py-2 w-full ${customStyle}`}
      />
      {/* Floating Label */}
      {label && (
        <label className="absolute left-3 -top-2 text-gray-600 text-sm transition-all peer-focus:top-[-10px] peer-focus:text-xs peer-focus:text-blue-500 bg-white px-1">
          {label}
        </label>
      )}

      {/* Search Icon for Search Input */}
      {type === "search" && (
        <FiSearch
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={16}
        />
      )}

      {/* Show/Hide Password Button */}
      {type === "password" && (
        <button
          type="button"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
          onClick={handleTogglePassword}
        >
          {showPassword ? "HIDE" : "SHOW"}
        </button>
      )}
    </div>
  );
};

export default Input;
