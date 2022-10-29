import React from "react";

import { NavigationBar } from "../../../components/bars/NavigationBar";
import { WrapperDefault } from "../../../components/containers/centred/WrapperDefault";
import { Column } from "../../../components/containers/columns/Column";
import { HalfVertical } from "../../../components/containers/halfs/HalfVertical";

const AdminSells = () => {
  // const user = useSelector(selectUser);
  // const token = useSelector(selectToken);
  //const theme = useSelector(selectTheme);

  return (
    <>
      <NavigationBar page={window.location.pathname}/>

      <WrapperDefault>
        <Column>
          <HalfVertical/>
          <HalfVertical/>
        </Column>
      </WrapperDefault>
    </>
  );
};

export default AdminSells;
