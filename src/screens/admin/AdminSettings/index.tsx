import { SwitchTheme } from "../../../components/buttons/SwitchTheme";
import { NavigationBar } from "../../../components/bars/NavigationBar";

// import { styles } from "./styles.module.css";

const AdminSettings = () => {
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

export default AdminSettings;
