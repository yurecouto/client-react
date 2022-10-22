import { SwitchTheme } from "../../../components/buttons/SwitchTheme";
import { NavigationBar } from "../../../components/bars/NavigationBar";
import { WrapperDefault } from "../../../components/containers/WrapperDefault";
import { FullContainer } from "../../../components/containers/FullContainer";

// import { styles } from "./styles.module.css";

const AdminSettings = () => {
  // const user = useSelector(selectUser);
  // const token = useSelector(selectToken);
  // const theme = useSelector(selectTheme);

  return (
    <>
      <NavigationBar page={window.location.pathname}/>

      <WrapperDefault>
        <FullContainer>
          <SwitchTheme/>
        </FullContainer>
      </WrapperDefault>
    </>
  );
};

export default AdminSettings;
