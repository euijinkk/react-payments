import React, { forwardRef } from "react";

import { MAX_USER_NAME_LENGTH } from "../../constant";
import Input from "../common/Input";
import InputContainer from "../common/InputContainer";

interface CardUserNameProps {
  userName: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement, Element>) => void;
  isValid: boolean;
}

const CardUserName = forwardRef(
  (
    { userName, onChange, onBlur, isValid }: CardUserNameProps,
    inputsRef: React.MutableRefObject<NodeListOf<HTMLInputElement>>
  ) => {
    return (
      <InputContainer title="카드 소유자 이름(선택)" isValid={isValid}>
        <Input
          value={userName}
          type="text"
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          onChange={onChange}
          maxLength={MAX_USER_NAME_LENGTH}
          style={{ padding: "0 10px" }}
          onBlur={onBlur}
          name="userName"
          align="left"
          ref={inputsRef}
        />
        <span className="card-user-name-length">
          {userName.length}/{MAX_USER_NAME_LENGTH}
        </span>
      </InputContainer>
    );
  }
);

CardUserName.displayName = "CardUserName";

export default CardUserName;
