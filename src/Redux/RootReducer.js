/**
 * Author : Hashan Eranda Jayalath
 * Copyrights: Hashan Eranda Jayalath
 * Version:
 * Description: Root reducer configuration
 * Date: 12-05-2020
 */

import { combineReducers } from "redux";

//reducers
import summary from "./Summary/SummaryReducer";

const rootReducer = combineReducers({
  summary,
});

export default rootReducer;
