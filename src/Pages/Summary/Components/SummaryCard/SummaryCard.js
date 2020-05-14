/**
 * Author : Hashan Eranda Jayalath
 * Copyrights: Hashan Eranda Jayalath
 * Version:
 * Description: WeekCard Component
 * Date: 13-06-2020
 */

import React, { useMemo } from "react";
import { connect } from "react-redux";

//styles
import "./summarycard.scss";

//component
import { OutlineButton } from "../../../../Components/Buttons";
import { BarChartComponent } from "../../../../Components/Charts";

//local components
import RecruitCard from "../../Components/RecruitCard";
import ProgressCard from "../../Components/ProgressCard";
import ClearanceCard from "../../Components/ClearanceCard";
import NotesCard from "../../Components/NotesCard";

//utils
import { convertChartData } from "./Utils/ConvertData";

const WeekCard = ({ compareToggle = null, ...props }) => {
  const chartData = useMemo(() => convertChartData(props.weeklySummary), [
    props.weeklySummary,
  ]);

  return (
    <>
      {props.weeklySummary.length > 0 && compareToggle === 5 ? (
        <div className="toggleBody">
          <div className="cardDataContainer recruitments">
            <div className="cardDetails">
              <h1>Summary for selected time</h1>
              <p>
                Registrations, quotations, active advisors and pending clearance
                summary
              </p>
            </div>
            <div className="containerData">
              <BarChartComponent data={chartData} />
            </div>
            <span className="flotingBorder"></span>
          </div>

          <div className="cardDataContainer quotations">
            <div className="cardDetails">
              <h1>Meeting Notes / Action items</h1>
              <p>Action items for the current week</p>
            </div>
            <div className="containerData">
              {props.weeklySummary.length > 0
                ? props.weeklySummary.map((data, index) => (
                    <NotesCard
                      key={index}
                      className="summaryView"
                      notesData={data.meeting_notes}
                    />
                  ))
                : ""}
            </div>
            <span className="flotingBorder"></span>
          </div>
          <div className="buttonContainer">
            <div>
              <p>Review status : {`Completed`}</p>
            </div>
            <div>
              <OutlineButton className="btn pending">Pending</OutlineButton>
              <OutlineButton className="btn absent">Absent</OutlineButton>
              <OutlineButton className="btn complete">Completed</OutlineButton>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

const mapStateToProps = (response) => ({
  weeklySummary: response.summary.weeklySummary,
});

export default connect(mapStateToProps)(WeekCard);
