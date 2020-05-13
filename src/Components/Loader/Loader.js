/**
 * Author : Hashan Eranda Jayalath
 * Copyrights: Hashan Eranda Jayalath
 * Version:
 * Description: Loader components of the App
 * Date: 12-05-2020
 */

import React, { Fragment } from "react";
import Lottie from "react-lottie";

import "./loader.scss";

//assets
import { mainLoader } from "../../Config/Lotties";

const lottieConfig = (file, loop = true) => {
  return {
    loop,
    autoplay: true,
    animationData: file,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
};

export const PageLoader = (props) => {
  return (
    <div className="loaderComponent">
      <Lottie
        options={lottieConfig(mainLoader)}
        height={111}
        width={111}
        className="noReports"
      />
    </div>
  );
};
