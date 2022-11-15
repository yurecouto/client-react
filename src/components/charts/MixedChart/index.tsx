import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

import styles from "./styles.module.css";
import { useWindowHeight } from "../../../hooks/window";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../providers/slices/theme.slice";

interface ChartProps {
  seriesBar: number[];
  seriesLine: number[];
  labels?: string[]
}

function MixedChart({
  seriesBar,
  seriesLine,
  labels
}: ChartProps) {
  const actualHeight = useWindowHeight();
  const theme = useSelector(selectTheme);

  const options: ApexOptions = {
    series: [
      {
        name: "Line",
        data: seriesLine,
        type: "line"
      },
      {
        name: "Bar",
        data: seriesBar,
        type: "bar"
      },
    ],

    labels: labels,

    chart: {
      type: "line",
      zoom: {
        enabled: true
      },
      foreColor: theme.COLORS.TEXT_DEFAULT
    },

    title: {
      text: "Mixed Chart",
      align: "left",
      style: {
        color: theme.COLORS.TEXT_DEFAULT
      }
    },

    colors: theme.COLORS.GRAPH_1,
  };

  return (
    <div className={styles.default_chart_container}>
      <ReactApexChart
        options={options}
        series={options.series}
        height={(actualHeight * 42) / 100}
        width={"98%"}
        type={"line"}
        style={{
          marginLeft: "1%",
          marginTop: 24
        }}
      />
    </div>
  );
};

export default MixedChart;
