/**
 * Author : Hashan Eranda Jayalath
 * Copyrights: Hashan Eranda Jayalath
 * Version:
 * Description: WeekCard Component
 * Date: 13-06-2020
 */

import React from "react";
import { connect } from "react-redux";

//styles
import "./weekcard.scss";

//component
import { OutlineButton } from "../../../../Components/Buttons";

//local components
import RecruitCard from "../../Components/RecruitCard";
import ProgressCard from "../../Components/ProgressCard";
import ClearanceCard from "../../Components/ClearanceCard";
import NotesCard from "../../Components/NotesCard";

//assets
import { existing, newUser, newCode } from "../../../../Config/Images";

const WeekCard = ({ compareToggle = 0, toggleMore = () => {}, ...props }) => {
  return (
    <>
      {props.weeklySummary.length > 0 && compareToggle < 5 ? (
        <div className="toggleBody">
          <div className="cardDataContainer recruitments">
            <div className="cardDetails">
              <h1>Recruitment</h1>
              <p>Registrations and new codes issued during the week</p>
            </div>
            <div className="containerData">
              <RecruitCard
                image={existing}
                number={
                  props.weeklySummary[compareToggle - 1].recruitment.existing
                }
                label={`Existing`}
              />
              <RecruitCard
                image={newUser}
                number={
                  props.weeklySummary[compareToggle - 1].recruitment
                    .registration
                }
                label={`Registrations`}
              />
              <RecruitCard
                image={newCode}
                number={
                  props.weeklySummary[compareToggle - 1].recruitment.new_code
                }
                label={`New Codes`}
              />
            </div>
            <span className="flotingBorder"></span>
          </div>

          <div className="cardDataContainer quotations mutiQuote">
            <div className="cardDataContainer">
              <div className="cardDetails">
                <h1>Quotations</h1>
                <p>4 quotations per advisor for a week</p>
              </div>
              <div className="containerData">
                <ProgressCard
                  Actual={
                    props.weeklySummary[compareToggle - 1].quotations.actual
                  }
                  Target={
                    props.weeklySummary[compareToggle - 1].quotations.target
                  }
                />
              </div>
            </div>

            <div className="cardDataContainer">
              <div className="cardDetails">
                <h1>Active Advisors</h1>
                <p>Advisors who submit 1 proposal for a week</p>
              </div>
              <div className="containerData">
                <ProgressCard
                  Actual={
                    props.weeklySummary[compareToggle - 1].active_advisors
                      .actual
                  }
                  Target={
                    props.weeklySummary[compareToggle - 1].active_advisors
                      .target
                  }
                />
              </div>
            </div>
            <span className="flotingBorder"></span>
          </div>
          <div className="cardDataContainer quotations">
            <div className="cardDetails">
              <h1>Pending Clearance</h1>
              <p>
                Summary of pending proposals, Suspense, Renewals and Revivals
              </p>
            </div>
            <div className="multiColumn">
              <div className="containerData">
                <ClearanceCard
                  label="Proposals"
                  value={
                    props.weeklySummary[compareToggle - 1].pending_clearance
                      .proposals
                  }
                />
                <ClearanceCard
                  label="Suspense"
                  value={
                    props.weeklySummary[compareToggle - 1].pending_clearance
                      .suspence
                  }
                />
                <ClearanceCard
                  label="Proposals"
                  value={
                    props.weeklySummary[compareToggle - 1].pending_clearance
                      .renewals
                  }
                />
                <ClearanceCard
                  label="Suspense"
                  value={
                    props.weeklySummary[compareToggle - 1].pending_clearance
                      .revivals
                  }
                />
              </div>
              <p className="popupLabel" onClick={() => toggleMore()}>
                View current performance dashboard
              </p>
            </div>

            <span className="flotingBorder"></span>
          </div>
          <div className="cardDataContainer quotations">
            <div className="cardDetails">
              <h1>Meeting Notes / Action items</h1>
              <p>Action items for the current week</p>
            </div>
            <div className="containerData">
              <NotesCard
                notesData={props.weeklySummary[compareToggle - 1].meeting_notes}
              />
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
