import React, { useState } from "react";

import Card from "./components/Card";
import CardInfoForm from "./components/CardInfoForm";
import REGEXP from "./contants/regexp";
interface CardInfo {
  cardNumbers: CardNumbers;
  expiredDate: ExpiredDate;
  userName: string;
  securityCode: string;
  password: Password;
}

type CardNumbers = [string, string, string, string];

type Password = [string, string];

interface ExpiredDate {
  month: string;
  year: string;
}

const initialCardInfo: CardInfo = {
  cardNumbers: ["", "", "", ""],
  expiredDate: { month: "", year: "" },
  userName: "",
  securityCode: "",
  password: ["", ""],
};

function App() {
  const [cardInfo, setCardInfo] = useState<CardInfo>(initialCardInfo);

  const onChangeCardNumber = (e: React.ChangeEvent<HTMLInputElement>, index: 0 | 1 | 2 | 3) => {
    const inputValue = e.target.value;

    if (inputValue === "" || REGEXP.NUMBER.test(inputValue)) {
      setCardInfo(prevCardInfo => {
        const newCardNumbers: CardNumbers = [...prevCardInfo.cardNumbers];

        newCardNumbers[index] = inputValue;

        return {
          ...prevCardInfo,
          cardNumbers: newCardNumbers,
        };
      });
    }
  };

  const onChangeExpiredDate = (e: React.ChangeEvent<HTMLInputElement>, index: 0 | 1) => {
    const inputValue = e.target.value;

    if (inputValue === "" || REGEXP.NUMBER.test(inputValue)) {
      setCardInfo(prevCardInfo => {
        const newExpiredDate: ExpiredDate = {
          ...prevCardInfo.expiredDate,
        };

        newExpiredDate[index === 0 ? "month" : "year"] = inputValue;

        return {
          ...prevCardInfo,
          expiredDate: newExpiredDate,
        };
      });
    }
  };

  const onChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (cardInfo.userName === "" && inputValue === " ") {
      return;
    }

    if (inputValue === "" || REGEXP.ENGLISH.test(inputValue)) {
      const newUserName = inputValue.replace("  ", " ").toUpperCase();

      setCardInfo(prevCardInfo => ({ ...prevCardInfo, userName: newUserName }));
    }
  };

  const onBlurUserName = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    setCardInfo(prevCardInfo => ({ ...prevCardInfo, userName: prevCardInfo.userName.trim() }));
  };

  const onChangeSecurityCode = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    const inputValue = e.target.value;

    if (inputValue === "" || REGEXP.NUMBER.test(inputValue)) {
      setCardInfo(prevCardInfo => ({
        ...prevCardInfo,
        securityCode: inputValue,
      }));
    }
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>, index: 0 | 1) => {
    const inputValue = e.target.value;

    if (inputValue === "" || REGEXP.NUMBER.test(inputValue)) {
      setCardInfo(prevCardInfo => {
        const newPassword: Password = [...prevCardInfo.password];

        newPassword[index] = inputValue;

        return {
          ...prevCardInfo,
          password: newPassword,
        };
      });
    }
  };
  // 재사용가능한 컴포넌트가 비즈니스 로직을 가지기 어렵다.
  // onChange 6개 이 정도 될것이다.
  // Input을 컴포넌트를 수정하는 방향보다, useInput custom hook 으로 분리하는 방향이

  return (
    <div className="App">
      <Card cardInfo={cardInfo} />
      <CardInfoForm
        cardInfo={cardInfo}
        onChangeCardNumber={onChangeCardNumber}
        onChangeExpiredDate={onChangeExpiredDate}
        onChangeUserName={onChangeUserName}
        onBlurUserName={onBlurUserName}
        onChangeSecurityCode={onChangeSecurityCode}
        onChangePassword={onChangePassword}
      />
    </div>
  );
}

export default App;
