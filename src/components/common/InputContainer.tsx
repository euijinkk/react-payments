import React from "react";

import FailMessage from "./FailMessage";
import SuccessMessage from "./SuccessMessage";

interface InputContainerProps {
  children: React.ReactNode;
  inputTitle: string;
  isValid: boolean;
  shouldShowError?: boolean;
}

export default function InputContainer({
  children,
  inputTitle,
  isValid,
  shouldShowError = false,
}: InputContainerProps) {
  return (
    <div className="input-container">
      <div className="input-container-top">
        <span className="input-title">{inputTitle}</span>
        {isValid ? <SuccessMessage /> : shouldShowError && <FailMessage />}
      </div>
      {children}
    </div>
  );
}
