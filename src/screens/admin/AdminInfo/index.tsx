import { SwitchTheme } from "../../../components/buttons/SwitchTheme";
import { NavigationBar } from "../../../components/bars/NavigationBar";
import { WrapperDefault } from "../../../components/containers/WrapperDefault";
import { Row } from "../../../components/containers/Row";
import { HalfHorizontal } from "../../../components/containers/HalfHorizontal";
// import { styles } from "./styles.module.css";

const AdminInfo = () => {
  // const user = useSelector(selectUser);
  // const token = useSelector(selectToken);
  // const theme = useSelector(selectTheme);

  return (
    <>
      <NavigationBar page={window.location.pathname}/>
      <WrapperDefault>
        <Row>
          <HalfHorizontal/>
          <HalfHorizontal/>
        </Row>
      </WrapperDefault>
    </>
  );
};

export default AdminInfo;

