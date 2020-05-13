/**
 * Author : Hashan Eranda Jayalath
 * Copyrights: Hashan Eranda Jayalath
 * Version:
 * Description: ClearanceCard Component
 * Date: 13-06-2020
 */

import React from "react";

//styles
import "./clearancecard.scss";

const ClearanceCard = ({ label = "Proposals", value = 250000 }) => {
  return (
    <div className="clearanceCard">
      <div className="cardLabel">
        <p>{label}</p>
      </div>

      <div className="cardValue">
        <h1>{value}</h1>
      </div>
    </div>
  );
};

export default ClearanceCard;
