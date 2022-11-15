import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useSelector } from "react-redux";

import styles from "./styles.module.css";
import { useWindowHeight } from "../../../hooks/window";
import { selectTheme } from "../../../providers/slices/theme.slice";

interface ChartProps {
  series?: number[];
  labels?: string[];
}

function PieChart({
  series,
  labels
}: ChartProps) {
  const actualHeight = useWindowHeight();
  const theme = useSelector(selectTheme);

  const options: ApexOptions = {
    series: series,
    labels: labels,

    chart: {
      type: "pie",
      zoom: {
        enabled: true
      },
      foreColor: theme.COLORS.TEXT_DEFAULT
    },

    title: {
      text: "Pie Chart",
      align: "left",
      style: {
        color: theme.COLORS.TEXT_DEFAULT
      }
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
        type={"pie"}
        style={{
          marginLeft: "1%",
          marginTop: 24
        }}
      />
    </div>
  );
};

export default PieChart;
