/**
 * Author : Hashan Eranda Jayalath
 * Copyrights: Hashan Eranda Jayalath
 * Version:
 * Description: Button Components of the App
 * Date: 12-06-2020
 */

import React, { useState } from "react";

import { Button } from "@material-ui/core";

//styles
import "./button.scss";

export const OutlineButton = ({ className, children, ...props }) => {
  return (
    <Button className={`outline-btn ${className}`} {...props}>
      {children}
    </Button>
  );
};
