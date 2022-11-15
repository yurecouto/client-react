import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useSelector } from "react-redux";

import styles from "./styles.module.css";
import { useWindowHeight } from "../../../hooks/window";
import { selectTheme } from "../../../providers/slices/theme.slice";

interface ChartProps {
  series?: {
    name: string;
    data: number[]
  }[];
  labels?: string[]
}

function AreaChart({
  series,
  labels
}: ChartProps) {
  const actualHeight = useWindowHeight();
  const theme = useSelector(selectTheme);

  const options: ApexOptions = {
    series: series,
    labels: labels,

    chart: {
      type: "area",
      zoom: {
        enabled: true
      },
      foreColor: theme.COLORS.TEXT_DEFAULT
    },

    title: {
      text: "Area Chart",
      align: "left",
      style: {
        color: theme.COLORS.TEXT_DEFAULT
      }
    },

    stroke: {
      curve: "straight"
    },

    colors: theme.COLORS.GRAPH_1
  };

  return (
    <div className={styles.default_chart_container}>
      <ReactApexChart
        options={options}
        series={options.series}
        height={(actualHeight * 42) / 100}
        width={"98%"}
        type={"area"}
        style={{
          marginLeft: "1%",
          marginTop: 24
        }}
      />
    </div>
  );
};

export default AreaChart;
