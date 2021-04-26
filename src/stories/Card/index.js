import React from "react";
import PropTypes from "prop-types";

import { CARD_SIZE } from "../constants/card";
import "./style.css";
import "../style/background.css";

const Card = ({
  cardType,
  numbers = [],
  userName = "",
  expirationDate = "",
  size,
}) => {
  const [firstNumber, secondNumber] = numbers;
  const { name: cardName, color } = cardType;

  return (
    <div className={`card card--${size} font-${size}`}>
      <div className={`card__inner bg-${color}`}>
        <div className="card__inner-card-name font-s">{cardName}</div>
        <div className="card__inner-chip"></div>
        {numbers.length !== 0 && (
          <ul className="font-l">
            <li>{firstNumber}</li>
            <li>{secondNumber}</li>

            <li>
              {[...Array(numbers[2]?.length || 0)].map((_) => (
                <span className="dot"></span>
              ))}
            </li>
            <li>
              {[...Array(numbers[3]?.length || 0)].map((_) => (
                <span className="dot"></span>
              ))}
            </li>
          </ul>
        )}
        <div className="card__inner-bottom font-m">
          <span className="card__inner-bottom-username">
            {userName === "" ? "NAME" : userName}
          </span>
          <span className="card__inner-bottom-expiration-date">
            {expirationDate === "" ? "MM/YY" : expirationDate}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  cardType: PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }),
  numbers: PropTypes.arrayOf(PropTypes.string),
  userName: PropTypes.string,
  expirationDate: PropTypes.string,
  size: PropTypes.oneOf(Object.values(CARD_SIZE)).isRequired,
};
