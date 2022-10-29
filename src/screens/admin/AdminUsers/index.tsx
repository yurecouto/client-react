import React from "react";

import { NavigationBar } from "../../../components/bars/NavigationBar";
import { HalfColumn } from "../../../components/containers/columns/HalfColumn";
import { HalfHorizontal } from "../../../components/containers/halfs/HalfHorizontal";
import { QuartVertical } from "../../../components/containers/quarts/QuartVertical";
import { Row } from "../../../components/containers/rows/Row";
import { WrapperDefault } from "../../../components/containers/centred/WrapperDefault";

const AdminUsers = () => {
  // const user = useSelector(selectUser);
  // const token = useSelector(selectToken);
  // const theme = useSelector(selectTheme);

  return (
    <>
      <NavigationBar page={window.location.pathname}/>

      <WrapperDefault>
        <Row>
          <HalfColumn>
            <QuartVertical/>

            <QuartVertical/>
          </HalfColumn>
          <HalfHorizontal/>
        </Row>
      </WrapperDefault>
    </>
  );
};

export default AdminUsers;
