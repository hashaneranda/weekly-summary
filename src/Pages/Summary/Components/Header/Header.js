/**
 * Author : Hashan Eranda Jayalath
 * Copyrights: Hashan Eranda Jayalath
 * Version:
 * Description: Header Component
 * Date: 12-06-2020
 */

import React, { useContext, useEffect, useState } from "react";
import { connect } from "react-redux";

//redux actions
import { toggleMenuAction } from "../../../../Redux/Summary/SummaryAction";

//context
import { Context as UserContext } from "../../../../Context/UserContext";

//styles
import "./header.scss";

//component
import { DatePicker, CheckBox } from "../../../../Components/FormInput";

//assets
import { user, bars } from "../../../../Config/Images";

const Header = (props) => {
  //context
  const { state } = useContext(UserContext);

  //date from
  const [fromDate, setFromDate] = useState(null);
  //date to
  const [toDate, setToDate] = useState(null);

  return (
    <div className="summaryHeader">
      <h1 className="mainHeader">Weekly review summary</h1>
      <div className="subHeader">
        <div className="userDetails">
          <img className="user" src={user} alt="logo" />
          <div className="userTab">
            <h1>{state.user}</h1>
            <p>FL0201</p>
          </div>
        </div>

        <div className={`menuToggle ${props.menuToggle ? "toggle" : ""}`}>
          <input
            type="checkbox"
            value={props.menuToggle}
            onClick={() => props.toggleMenuAction(!props.menuToggle)}
          />
          <span></span>
          <span></span>
          <span></span>
          <div className="menu"></div>
        </div>

        <div className={`tableFilter ${props.menuToggle ? "toggle" : ""}`}>
          <div className="datePickerResults">
            <DatePicker
              value={fromDate}
              handleDateChange={(date) => setFromDate(date)}
              disableFuture
              initialFocusedDate
              placeholder="From"
            />
          </div>
          <div className="datePickerResults">
            <DatePicker
              value={toDate}
              handleDateChange={(date) => console.log(date)}
              disableFuture
              initialFocusedDate
              placeholder="To"
            />
          </div>
        </div>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
