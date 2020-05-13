/**
 * Author : Hashan Eranda Jayalath
 * Copyrights: Hashan Eranda Jayalath
 * Version:
 * Description: RecruitCard Component
 * Date: 13-06-2020
 */

import React from "react";

//styles
import "./recruitcard.scss";

//component
import { DatePicker } from "../../../../Components/FormInput";

const RecruitCard = ({ image = "", number = 24, label = "Existing" }) => {
  return (
    <div className="cardData recruitBox">
      <img src={image} alt="logo" className="cardImage" />
      <div className="cardDataDetails">
        <h1 className="mainData">{number}</h1>
        <h2>{label}</h2>
      </div>
    </div>
  );
};

export default RecruitCard;
