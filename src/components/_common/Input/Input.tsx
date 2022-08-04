import React from "react";

import "./Input.css";

interface InputProps {
  type: string;
  onChange: () => void;
  placeholder: string;
  name: string;
  className: string;
}

export const Input = ({
  type,
  onChange,
  placeholder,
  name,
  className,
}: InputProps) => {
  return (
    <>
      <input
        className={className}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        name={name}
      />
    </>
  );
};
