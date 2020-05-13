/**
 * Author : Hashan Eranda Jayalath
 * Copyrights: Hashan Eranda Jayalath
 * Version:
 * Description: Summary reducer
 * Date: 12-06-2020
 */

import * as types from "../../Store/ActionTypes";

import SummaryData from "../../SummaryData.json";

const initailState = {
  weeklySummary: SummaryData,
};

export default function (state = initailState, action) {
  let response = action.response;

  switch (action.type) {
    // case types.CREATE_FILE_SUCCESS:
    //   return {
    //     ...state,
    //     createdFile: {
    //       ...state.createdFile,
    //       status: response.status,
    //       data: response.data,
    //     },
    //   };

    default:
      return state;
  }
}
