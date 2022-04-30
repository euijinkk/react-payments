import React, { forwardRef } from "react";

import { Password } from "../../types";
import Input from "../common/Input";
import InputContainer from "../common/InputContainer";

interface CardPasswordProps {
  password: Password;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isValid: boolean;
}

const CardPassword = forwardRef(
  (
    { password, onChange, isValid }: CardPasswordProps,
    inputsRef: React.MutableRefObject<NodeListOf<HTMLInputElement>>
  ) => {
    return (
      <InputContainer title="카드 비밀번호" isValid={isValid}>
        <Input
          type="password"
          size="tiny"
          value={password[0] || ""}
          onChange={onChange}
          maxLength={1}
          name="password"
          data-index={0}
          classes="password-input"
          ref={inputsRef}
        />
        <Input
          type="password"
          size="tiny"
          value={password[1] || ""}
          onChange={onChange}
          maxLength={1}
          name="password"
          data-index={1}
          classes="password-input"
          ref={inputsRef}
        />
        <input
          className="input-basic rest-password-box w-15 password-input"
          type="password"
          value={1}
          maxLength={1}
          disabled
        />
        <input
          className="input-basic rest-password-box w-15 password-input"
          type="password"
          value={1}
          maxLength={1}
          disabled
        />
      </InputContainer>
    );
  }
);

CardPassword.displayName = "CardPassword";

export default CardPassword;
