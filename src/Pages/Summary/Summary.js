/**
 * Author : Hashan Eranda Jayalath
 * Copyrights: Hashan Eranda Jayalath
 * Version:
 * Description: Summary Page
 * Date: 12-06-2020
 */

import React, { useContext, useEffect, useState } from "react";
import { connect } from "react-redux";

//redux actions
import { toggleMenuAction } from "../../Redux/Summary/SummaryAction";

//styles
import "./summary.scss";

//component
import { ModalComponent } from "../../Components/Modal";

//local components
import Header from "./Components/Header";
import WeekCard from "./Components/WeekCard";
import SummaryCard from "./Components/SummaryCard";

//assets
import { existing, newUser, newCode } from "../../Config/Images";

const Summary = (props) => {
  //week toggle
  const [compareToggle, setCompareToggle] = useState(1);

  //modal
  const [toggleModal, setToggleModal] = useState(false);

  return (
    <div className="appContainer">
      <div className="summaryContainer">
        <Header />
        <div className="summaryBody">
          <div className={`toggleHeader ${props.menuToggle ? "toggle" : ""}`}>
            {props.weeklySummary
              ? props.weeklySummary.map((data, index) => (
                  <div
                    key={index}
                    className={`balloon  ${
                      compareToggle === index + 1 ? "active" : ""
                    }`}
                    onClick={() => {
                      setCompareToggle(index + 1);
                      props.toggleMenuAction(false);
                    }}
                  >
                    <h1>Week {index + 1}</h1>
                  </div>
                ))
              : ""}

            <div
              className={`balloon  ${compareToggle === 5 ? "active" : ""}`}
              onClick={() => {
                setCompareToggle(5);
                props.toggleMenuAction(false);
              }}
            >
              <h1>Summary</h1>
            </div>
          </div>
          {compareToggle < 5 && (
            <WeekCard
              compareToggle={compareToggle}
              toggleMore={() => setToggleModal(true)}
            />
          )}
          {compareToggle === 5 && <SummaryCard compareToggle={compareToggle} />}
        </div>
      </div>
      <ModalComponent
        open={toggleModal}
        handleClose={() => setToggleModal(false)}
        showCloseBtn={true}
      >
        <div className="modalContainer">
          <h1 className="headerModal">Pending Clearance</h1>
          <div className="formContainer"></div>
        </div>
      </ModalComponent>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    toggleMenuAction: (data) => dispatch(toggleMenuAction(data)),
  };
};

const mapStateToProps = (response) => ({
  weeklySummary: response.summary.weeklySummary,
  menuToggle: response.summary.menuToggle,
});

export default connect(mapStateToProps, mapDispatchToProps)(Summary);
