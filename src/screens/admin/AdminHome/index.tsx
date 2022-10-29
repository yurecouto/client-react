import React from "react";

import { NavigationBar } from "../../../components/bars/NavigationBar";
import { WrapperDefault } from "../../../components/containers/centred/WrapperDefault";
import { Column } from "../../../components/containers/columns/Column";
import { Row } from "../../../components/containers/rows/Row";
import { QuartHorizontal } from "../../../components/containers/quarts/QuartHorizontal";
import { HalfVertical } from "../../../components/containers/halfs/HalfVertical";

const AdminHome = () => {
  // const user = useSelector(selectUser);
  // const token = useSelector(selectToken);
  // const theme = useSelector(selectTheme);

  return (
    <>
      <NavigationBar page={window.location.pathname}/>

      <WrapperDefault>
        <Column>
          <Row>
            <QuartHorizontal/>
            <QuartHorizontal/>
          </Row>
          <HalfVertical/>
        </Column>
      </WrapperDefault>
    </>
  );
};

export default AdminHome;
