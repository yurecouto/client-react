import React from "react";

import { NavigationBar } from "../../../components/bars/NavigationBar";
import { HalfColumn } from "../../../components/containers/columns/HalfColumn";
import { HalfHorizontal } from "../../../components/containers/halfs/HalfHorizontal";
import { QuartVertical } from "../../../components/containers/quarts/QuartVertical";
import { Row } from "../../../components/containers/rows/Row";
import { WrapperDefault } from "../../../components/containers/centred/WrapperDefault";
import MixedChart from "../../../components/charts/MixedChart";

const AdminUsers = () => {
  // const user = useSelector(selectUser);
  // const token = useSelector(selectToken);
  // const theme = useSelector(selectTheme);

  const seriesLine = [152, 222, 221, 76, 151, 228, 93, 78, 157, 110, 109, 200, 258, 229, 135, 170, 121, 96, 202, 250, 34];
  const seriesBar = [159, 129, 182, 251, 237, 173, 113, 28, 253, 253, 126, 213, 134, 246, 59, 273, 172, 288, 113, 113, 206];

  return (
    <>
      <NavigationBar page={window.location.pathname}/>

      <WrapperDefault>
        <Row>
          <HalfColumn>
            <QuartVertical/>
            <QuartVertical>
              <MixedChart
                seriesLine={seriesLine}
                seriesBar={seriesBar}
              />
            </QuartVertical>
          </HalfColumn>
          <HalfHorizontal/>
        </Row>
      </WrapperDefault>
    </>
  );
};

export default AdminUsers;
