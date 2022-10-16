import { SwitchTheme } from "../../../components/buttons/SwitchTheme";
import { NavigationBar } from "../../../components/bars/NavigationBar";

// import { styles } from "./styles.module.css";

const AdminHome = () => {
  // const user = useSelector(selectUser);
  // const token = useSelector(selectToken);
  // const theme = useSelector(selectTheme);

  return (
    <>
      <SwitchTheme/>
      <NavigationBar page={window.location.pathname}/>
    </>
  );
};

export default AdminHome;
