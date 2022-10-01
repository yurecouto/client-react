import React from "react";
import { useSelector } from "react-redux";

import { selectUser } from "../../providers/slices/user.slice";
import { selectToken } from "../../providers/slices/token.slice";

const AdminHome = () => {
  // const user = useSelector(selectUser);
  // const token = useSelector(selectToken);

  return (
    <>
      {/* <Header objeto={user} agendamento={true}/>
      <NavBar objeto={user} /> */}
    </>
  );
};

export default AdminHome;
