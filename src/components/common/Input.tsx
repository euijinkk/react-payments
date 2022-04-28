import React, { InputHTMLAttributes } from "react";

const sizeTag = {
  tiny: "w-15",
  small: "w-25",
  medium: "w-25",
  large: "w-75",
  full: "w-100",
};

const alignTag = {
  right: "text-right",
  left: "text-left",
  center: "text-center",
};

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "maxLength"> {
  size?: "tiny" | "small" | "medium" | "large" | "full";
  align?: "right" | "left" | "center";
  maxLength?: number;
  classes?: string;
}

export default function Input({ size, maxLength, onChange, classes, align, ...props }: InputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > maxLength) return;
    onChange?.(e);
  };

  return (
    <input
      className={`input-basic ${classes} ${sizeTag[size]} ${alignTag[align]}`}
      onChange={handleChange}
      {...props}
    />
  );
}