import React, { forwardRef } from "react";

import CVC from "../../assets/cvcImage.png";
import Input from "../common/Input";
import InputContainer from "../common/InputContainer";
import UserGuide from "../common/UserGuide";

interface CardSecurityProps {
  securityCode: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isValid: boolean;
}

const CardSecurityCode = forwardRef(
  (
    { securityCode, onChange, isValid }: CardSecurityProps,
    inputsRef: React.MutableRefObject<NodeListOf<HTMLInputElement>>
  ) => {
    return (
      <InputContainer title="보안 코드(CVC/CVV)" isValid={isValid}>
        <div className="input-box w-25">
          <Input
            type="password"
            value={securityCode || ""}
            onChange={onChange}
            maxLength={3}
            name="securityCode"
            ref={inputsRef}
          />
          <UserGuide>
            <img width="160px" src={CVC} alt="cvc" />
          </UserGuide>
        </div>
      </InputContainer>
    );
  }
);

CardSecurityCode.displayName = "CardSecurityCode";

export default CardSecurityCode;
