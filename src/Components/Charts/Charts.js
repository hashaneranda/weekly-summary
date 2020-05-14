/**
 * Author : Hashan Eranda Jayalath
 * Copyrights: Hashan Eranda Jayalath
 * Version:
 * Description: Modal Components of the App
 * Date: 12-06-2020
 */

import React, { useState } from "react";

import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

//progressbar
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

//styles
import "./charts.scss";

const dataChart = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: { value: 2500 },
  },
  // {
  //   name: "Page B",
  //   uv: 3000,
  //   pv: 1398,
  //   amt: 2210,
  // },
  // {
  //   name: "Page C",
  //   uv: 2000,
  //   pv: 9800,
  //   amt: 2290,
  // },
  // {
  //   name: "Page D",
  //   uv: 2780,
  //   pv: 3908,
  //   amt: 2000,
  // },
];

/**
 *ProgressBar Component
 *
 * @param {*} {
 *   percentage - percentage completion
 *   className - classes,
 *   color  - color,
 *   ...props
 * }
 * @returns ProgressBar Component
 */
export const ProgressBar = ({
  percentage = 0,
  className = "",
  color = "#d05353ff",
  ...props
}) => {
  return (
    <div className={`progressBar ${className}`}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          // Text size
          textSize: "18px",

          // How long animation takes to go from one percentage to another, in seconds
          pathTransitionDuration: 10,

          // Can specify path transition in more detail, or remove it entirely
          // pathTransition: 'none',

          // Colors
          pathColor: color,
          textColor: color,
        })}
      />
    </div>
  );
};

/**
 *BarChart Component
 *
 * @param {*} {
 *   data - chart data
 *   className - classes,
 *   color  - color,
 *   ...props
 * }
 * @returns BarChart Component
 */
export const BarChartComponent = ({
  data = dataChart,
  className = "",
  color = "#d05353ff",
  ...props
}) => {
  let tooltip;
  const CustomTooltip = ({ active, payload }) => {
    if (!active || !tooltip) return null;
    for (const bar of payload)
      if (bar.dataKey === tooltip)
        return (
          <div className="tooltipChart">
            {bar.name}
            <br />
            {JSON.stringify(bar)}
          </div>
        );
    return null;
  };

  return (
    <div className={`barchart ${className}`}>
      <ResponsiveContainer width="95%" height="95%">
        <BarChart
          // width={800}
          // height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis hide />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar
            dataKey="recruitment"
            fill="#004ba8"
            onMouseOver={() => (tooltip = "mt")}
          />
          <Bar
            dataKey="quotations"
            fill="#7ddf64ff"
            onMouseOver={() => (tooltip = "pv")}
          />
          <Bar
            dataKey="active_advisors"
            fill="#FFC107"
            onMouseOver={() => (tooltip = "amt")}
            // data={}
          />
          <Bar
            dataKey="pending_clearance"
            fill="#d05353ff"
            onMouseOver={() => (tooltip = "uv")}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
