/**
 * Author : Hashan Eranda Jayalath
 * Copyrights: Hashan Eranda Jayalath
 * Version:
 * Description: ProgressCard Component
 * Date: 13-06-2020
 */

import React, { useEffect, useState, useMemo } from "react";

//styles
import "./progresscard.scss";

//component
import { ProgressBar } from "../../../../Components/Charts";

const ProgressCard = ({ Actual = 5, Target = 25 }) => {
  //   const percentage = Math.floor((Actual / Target) * 100);

  const percentage = useMemo(() => Math.floor((Actual / Target) * 100), [
    Actual,
    Target,
  ]);

  const [color, setcolor] = useState("");

  useEffect(() => {
    const color = getColor(percentage);

    setcolor(color);
  }, [percentage]);

  const getColor = (percentage) => {
    // let color = "";

    if (percentage >= 100) {
      return "#7ddf64ff";
    } else if (percentage >= 75 && percentage < 100) {
      return "#FFC107";
    } else {
      return "#d05353ff";
    }
  };

  return (
    <div className={`progressCard `} style={{ borderColor: color }}>
      <div className="progressBar">
        <ProgressBar percentage={percentage} color={color} />
      </div>

      <div className="cardDataDetails">
        <div className="quoteData left">
          <h1>{Actual}</h1>
          <h2>Actual</h2>
        </div>
        <div className="quoteData">
          <h1>{Target}</h1>
          <h2>Target</h2>
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;
