import React, { forwardRef } from "react";

import { CardNumbers } from "../../types";
import Input from "../common/Input";
import InputContainer from "../common/InputContainer";

interface CardNumberProps {
  cardNumbers: CardNumbers;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isValid: boolean;
  // inputsRef: React.MutableRefObject<NodeListOf<HTMLInputElement>>;
}

const CardNumber = forwardRef(
  (
    { cardNumbers, onChange, isValid }: CardNumberProps,
    inputsRef: React.MutableRefObject<NodeListOf<HTMLInputElement>>
  ) => {
    return (
      <InputContainer title="카드번호" isValid={isValid}>
        <div className="input-box">
          {cardNumbers.map((cardNumber, index) => (
            <React.Fragment key={index}>
              <Input
                type={index < 2 ? "text" : "password"}
                value={cardNumber}
                onChange={onChange}
                maxLength={4}
                name="cardNumbers"
                data-index={index}
                ref={inputsRef}
              />
              {index !== 3 && <span className="card-number-delimiter">-</span>}
            </React.Fragment>
          ))}
        </div>
      </InputContainer>
    );
  }
);

CardNumber.displayName = "CardNumber";

export default CardNumber;
