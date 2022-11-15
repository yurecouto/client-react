import React from "react";

import { NavigationBar } from "../../../components/bars/NavigationBar";
import { WrapperDefault } from "../../../components/containers/centred/WrapperDefault";
import { Column } from "../../../components/containers/columns/Column";
import { HalfVertical } from "../../../components/containers/halfs/HalfVertical";
import { QuartHorizontal } from "../../../components/containers/quarts/QuartHorizontal";
import { Row } from "../../../components/containers/rows/Row";
import BarChart from "../../../components/charts/BarChart";
import LineChart from "../../../components/charts/LineChart";
import PieChart from "../../../components/charts/PieChart";

const AdminSells = () => {
  // const user = useSelector(selectUser);
  // const token = useSelector(selectToken);
  //const theme = useSelector(selectTheme);

  const seriesA = [
    {
      name: "Item 01",
      data: [10, 41, 35, 51, 62, 62, 69, 91, 148, 102, 57, 89, 89, 101, 145, 131, 124, 112, 121]
    },
    {
      name: "Item 02",
      data: [15, 34, 37, 59, 43, 63, 69, 99, 150, 123, 87, 120, 88, 79, 110, 117, 120, 119, 94]
    },
    {
      name: "Item 03",
      data: [20, 52, 42, 66, 45, 67, 73, 100, 156, 135, 93, 129, 104, 88, 117, 134, 145, 134, 99]
    },
  ]
  const labelsA = [
    "0001", "0002", "0003", "0004", "0005",
    "0006", "0007", "0008", "0009", "0010",
    "0011", "0012", "0013", "0014", "0015",
    "0016", "0017", "0018", "0019", "0020",
  ]

  const seriesB = [44, 55, 13, 43, 22, 35, 30];
  const labelsB = ["Team A", "Team B", "Team C", "Team D", "Team E", "Team F", "Team G"];

  const seriesC = [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380, 1400, 1414, 1500, 1567, 1600];
  const categories = [
    "Item 01", "Item 02", "Item 03", "Item 04", "Item 05",
    "Item 06", "Item 07", "Item 08", "Item 09", "Item 10",
    "Item 11", "Item 12", "Item 13", "Item 14", "Item 15",
  ]

  return (
    <>
      <NavigationBar page={window.location.pathname}/>

      <WrapperDefault>
        <Column>
          <Row>
            <QuartHorizontal>
              <LineChart
                series={seriesA}
                labels={labelsA}
              />
            </QuartHorizontal>
            <QuartHorizontal>
              <PieChart
                series={seriesB}
                labels={labelsB}
              />
            </QuartHorizontal>
          </Row>
          <HalfVertical>
            <BarChart
              series={seriesC}
              categories={categories}
            />
          </HalfVertical>
        </Column>
      </WrapperDefault>
    </>
  );
};

export default AdminSells;
