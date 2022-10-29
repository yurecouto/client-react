import React from "react";

import { NavigationBar } from "../../../components/bars/NavigationBar";
import { WrapperDefault } from "../../../components/containers/centred/WrapperDefault";

const AdminProducts = () => {
  // const user = useSelector(selectUser);
  // const token = useSelector(selectToken);
  //const theme = useSelector(selectTheme);

  return (
    <>
      <NavigationBar page={window.location.pathname}/>

      <WrapperDefault>

      </WrapperDefault>
    </>
  );
};

export default AdminProducts;
