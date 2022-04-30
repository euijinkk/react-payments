import React, { forwardRef, InputHTMLAttributes, useEffect, useRef } from "react";

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

const Input = forwardRef(
  (
    { size, maxLength, onChange, classes, align, ...props }: InputProps,
    inputsRef: React.MutableRefObject<NodeListOf<HTMLInputElement>>
  ) => {
    const arrayInputsRef = useRef<HTMLInputElement[]>(null);

    useEffect(() => {
      arrayInputsRef.current = Array.from(inputsRef.current);
    }, [inputsRef]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputLength = e.target.value.length;

      if (inputLength > maxLength) return;
      onChange?.(e);
      if (inputLength === maxLength) {
        focusOnNextInput(e.target);
      }
    };

    const focusOnNextInput = (target: HTMLInputElement) => {
      const inputIndex = arrayInputsRef.current.findIndex(element => element === target);

      arrayInputsRef.current[inputIndex + 1].focus();
    };

    return (
      <input
        className={`input-basic ${classes} ${sizeTag[size]} ${alignTag[align]}`}
        onChange={handleChange}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
