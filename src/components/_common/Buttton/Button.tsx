import React from "react";

interface ButtonProps {
  title: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  disabled?: boolean;
  className: string;
}

export const Button = ({
  title,
  type,
  onClick,
  disabled,
  className,
}: ButtonProps) => {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={className}
      >
        {title}
      </button>
    </>
  );
};
