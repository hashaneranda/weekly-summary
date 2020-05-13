const dataChart = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
];

export const convertChartData = (data) => {
  const newData = data.map((val, index) => {
    return {
      name: `Week ${index + 1}`,
      recruitment:
        (val.recruitment.existing +
          val.recruitment.registration +
          val.recruitment.new_code) /
        7,
      quotations:
        val.quotations.target < 10
          ? val.quotations.target * 10
          : val.quotations.target,
      active_advisors: val.active_advisors.target,
      pending_clearance:
        (val.pending_clearance.proposals +
          val.pending_clearance.suspence +
          val.pending_clearance.renewals +
          val.pending_clearance.revivals) /
        8000,
    };
  });

  return newData;
};
