import React from "react";
import { useSelector } from "react-redux";
import { SwitchTheme } from "../../../components/buttons/SwitchTheme";
import { NavigationBar } from "../../../components/bars/NavigationBar";


const AdminHome = () => {
  // const user = useSelector(selectUser);
  // const token = useSelector(selectToken);

  return (
    <>
      <SwitchTheme/>
      <NavigationBar/>
    </>
  );
};

export default AdminHome;
