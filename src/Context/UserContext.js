/**
 * Author : Hashan Eranda Jayalath
 * Copyrights: Hashan Eranda Jayalath
 * Version:
 * Description: User Context
 * Date: 12-06-2020
 */

import createDataContext from "./CreateDataContext";

const userReducer = (state, action) => {
  const payload = action.payload;
  switch (action.type) {
    default:
      return state;
  }
};

const initialState = {
  user: "Hashan Jayalath",
};

export const { Context, Provider } = createDataContext(
  userReducer,
  {},
  initialState
);
