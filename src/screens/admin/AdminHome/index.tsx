import React, { useEffect } from "react";

import { NavigationBar } from "../../../components/bars/NavigationBar";
import { WrapperDefault } from "../../../components/containers/centred/WrapperDefault";
import { Column } from "../../../components/containers/columns/Column";
import { Row } from "../../../components/containers/rows/Row";
import { QuartHorizontal } from "../../../components/containers/quarts/QuartHorizontal";
import { HalfVertical } from "../../../components/containers/halfs/HalfVertical";
import api from "../../../services/api";
import LineChart from "../../../components/charts/LineChart";
import AreaChart from "../../../components/charts/AreaChart";
import PieChart from "../../../components/charts/PieChart";
import BarChart from "../../../components/charts/BarChart";
import { HalfColumn } from "../../../components/containers/columns/HalfColumn";
import { QuartVertical } from "../../../components/containers/quarts/QuartVertical";
import { HalfHorizontal } from "../../../components/containers/halfs/HalfHorizontal";

const AdminHome = () => {
  const seriesA = [
    {
      name: "Item 01",
      data: [152, 222, 221, 76, 151, 228, 93, 78, 157, 110, 109, 200, 258, 229, 135, 170, 121, 96, 202, 250, 34, 237, 199, 108, 117, 204, 131, 200, 35, 176, 120, 163, 146, 143, 127, 39, 212, 73, 158, 18, 56, 299, 21, 243, 177, 183, 233, 195, 151, 261, 267, 204, 150, 161, 165, 182, 232, 193, 106, 125]
    },
    {
      name: "Item 02",
      data: [159, 129, 182, 251, 237, 173, 113, 28, 253, 253, 126, 213, 134, 246, 59, 273, 172, 288, 113, 113, 206, 162, 145, 45, 292, 259, 300, 132, 176, 234, 198, 149, 212, 134, 235, 297, 69, 99, 111, 214, 94, 22, 227, 213, 198, 119, 205, 220, 243, 233, 175, 180, 245, 228, 143, 131, 186, 260, 234, 213]
    },
  ]

  return (
    <>
      <NavigationBar page={window.location.pathname}/>

      <WrapperDefault>
        <Row>
          <HalfHorizontal/>
          <HalfColumn>
            <QuartVertical>
              <AreaChart
                series={seriesA}
              />
            </QuartVertical>
            <QuartVertical/>
          </HalfColumn>
        </Row>
      </WrapperDefault>
    </>
  );
};

export default AdminHome;
