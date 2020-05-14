/**
 * Author : Hashan Eranda Jayalath
 * Copyrights: Hashan Eranda Jayalath
 * Version:
 * Description: NotesCard Component
 * Date: 13-06-2020
 */

import React from "react";

//styles
import "./notescard.scss";

//assets
import { tick, cross } from "../../../../Config/Images";

//component
import { ProgressBar } from "../../../../Components/Charts";

const NotesCard = ({ notesData = [], className = "" }) => {
  return (
    <div className={`notesCard ${className}`}>
      {notesData.map((data, index) => (
        <div key={index} className="toDo">
          <p>{data.data}</p>
          <div>
            {data.status === true ? (
              <img className="logo tick done" src={tick} alt="logo" />
            ) : data.status === false ? (
              <img className="logo cross done" src={cross} alt="logo" />
            ) : (
              <div className="logoContainer">
                <img className="logo tick" src={tick} alt="logo" />
                <img className="logo cross" src={cross} alt="logo" />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotesCard;
