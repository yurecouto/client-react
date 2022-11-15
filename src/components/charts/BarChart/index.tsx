import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useSelector } from "react-redux";

import styles from "./styles.module.css";
import { useWindowHeight } from "../../../hooks/window";
import { selectTheme } from "../../../providers/slices/theme.slice";

interface ChartProps {
  categories?: string[];
  series: number[]
}

function BarChart({
  categories,
  series
}: ChartProps) {
  const actualHeight = useWindowHeight();
  const theme = useSelector(selectTheme);

  const options: ApexOptions = {
    series: [{
      data: series,
    }],

    xaxis: {
      categories: categories
    },

    chart: {
      type: "bar",
      zoom: {
        enabled: true
      },
      foreColor: theme.COLORS.TEXT_DEFAULT
    },

    title: {
      text: "Bar Chart",
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
        type={"bar"}
        style={{
          marginLeft: "1%",
          marginTop: 24
        }}
      />
    </div>
  );
};

export default BarChart;
