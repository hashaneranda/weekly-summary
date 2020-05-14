/**
 * Author : Hashan Eranda Jayalath
 * Copyrights: Hashan Eranda Jayalath
 * Version:
 * Description: Summary actions
 * Date: 12-06-2020
 */

import * as types from "../../Store/ActionTypes";

export const toggleMenuAction = (response) => {
  return {
    type: types.MENU_TOGGLE,
    response,
  };
};
