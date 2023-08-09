export const barChartDataDailyTraffic = [
  {
    name: "Daily Proportion",
    data: [20, 30, 40, 20],
  },
];

export const barChartOptionsDailyTraffic = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
      backgroundColor: "#000000",
    },
    onDatasetHover: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
    },
    theme: "dark",
  },
  xaxis: {
    categories: ["Instagram", "Reddit", "Twitter"],
    show: false,
    labels: {
      show: true,
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    color: "black",
    labels: {
      show: true,
      style: {
        colors: "#CBD5E0",
        fontSize: "14px",
      },
    },
  },
  grid: {
    show: false,
    strokeDashArray: 5,
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      type: "vertical",
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      colorStops: [
        [
          {
            offset: 0,
            color: "#4318FF",
            opacity: 1,
          },
          {
            offset: 100,
            color: "rgba(67, 24, 255, 1)",
            opacity: 0.28,
          },
        ],
      ],
    },
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      columnWidth: "40px",
    },
  },
};

export const pieChartOptions = {
  labels: [
    "Sports",
    "Politics",
    "Education",
    "Entertainment",
    "Business",
    "Health",
    "Technology",
    "Religion",
    "Other",
  ],
  colors: [
    "#4318FF",
    // "#6AD2FF",
    "#73C6B6",
    // "#030C19",
    "#F1C40F",
    "#4318FF",
    "#6AD2FF",
    "#030C19",
    "#4318FF",
    "#000000",
    "#bbbbbb",
  ],
  chart: {
    width: "50px",
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  hover: { mode: null },
  plotOptions: {
    donut: {
      expandOnClick: false,
      donut: {
        labels: {
          show: false,
        },
      },
    },
  },
  fill: {
    colors: [
      "#5b93aa",
      "#CF8874",
      "#6AD2AA",
      "#d3f5f5",
      "#FFFFFF",
      "#FCF5CF",
      "#DADADA",
      // "#d3f5f5"
      // "#7D3C98",
    ],
  },
  tooltip: {
    enabled: true,
    theme: "dark",
    style: {
      fontSize: "12px",
      fontFamily: undefined,
      backgroundColor: "#000000",
    },
  },
};

export const pieChartData = [44, 55, 13, 43, 22, 10, 20, 30, 40];

export const barChartDataWeeklyRevenue = [
  {
    name: "FAKE",
    data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
    color: "#FE0000",
  },
  {
    name: "REAL",
    data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
    color: "#55FE00",
  },
];

export const twitterDataWeeklyRevenue = [
  {
    name: "FAKE",
    data: [410, 601, 219, 300, 371, 443, 184, 473, 375],
    color: "#FE0000",
  },
  {
    name: "REAL",
    data: [219, 109, 501, 284, 371, 258, 598, 289, 390],
    color: "#55FE00",
  },
];

export const barChartOptionsWeeklyRevenue = {
  chart: {
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  // colors:['#ff3322','#faf']
  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
      backgroundColor: "#000000",
    },
    theme: "dark",
    onDatasetHover: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
    },
  },
  xaxis: {
    categories: [
      "Sports",
      "Politics",
      "Education",
      "Entertainment",
      "Business",
      "Health",
      "Technology",
      "Religion",
      "Other",
    ],
    show: false,
    labels: {
      show: true,
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    color: "black",
    labels: {
      show: false,
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
  },

  grid: {
    borderColor: "rgba(163, 174, 208, 0.3)",
    show: true,
    yaxis: {
      lines: {
        show: false,
        opacity: 0.5,
      },
    },
    row: {
      opacity: 0.5,
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  fill: {
    type: "solid",
    colors: ["#5E37FF", "#6AD2FF", "#E1E9F8"],
  },
  legend: {
    show: false,
  },
  colors: ["#5E37FF", "#6AD2FF", "#E1E9F8"],
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      columnWidth: "20px",
    },
  },
};

export const lineChartDataTotalSpent = [
  {
    name: "FAKE",
    data: [150, 604, 48, 606, 49, 68],
    color: "#4318FF",
  },
  {
    name: "REAL",
    data: [300, 400, 214, 460, 180, 460],
    color: "#6AD2Fa",
  },
];

export const twitterDataTotalSpent = [
  {
    name: "FAKE",
    data: [45, 63, 77, 72, 31, 51],
    color: "#4318FF",
  },
  {
    name: "REAL",
    data: [43, 42, 76, 65, 69, 84],
    color: "#6AD2Fa",
  },
];

export const lineChartOptionsTotalSpent = {
  legend: {
    show: true,
  },

  theme: {
    mode: "light",
  },
  chart: {
    type: "line",

    toolbar: {
      show: false,
    },
  },

  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },

  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
      backgroundColor: "#000000",
    },
    theme: "dark",
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
  grid: {
    show: false,
  },
  xaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      style: {
        colors: "#A3AED0",
        fontSize: "12px",
        fontWeight: "500",
      },
    },
    type: "text",
    range: undefined,
    categories: ["SEP", "OCT", "NOV", "DEC", "JAN", "FEB"],
  },

  yaxis: {
    show: false,
  },
};
