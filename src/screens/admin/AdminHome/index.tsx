import { NavigationBar } from "../../../components/bars/NavigationBar";
import { WrapperDefault } from "../../../components/containers/WrapperDefault";
import { Column } from "../../../components/containers/Column";
import { Row } from "../../../components/containers/Row";
import { QuartHorizontal } from "../../../components/containers/QuartHorizontal";
import { HalfVertical } from "../../../components/containers/HalfVertical";

// import { styles } from "./styles.module.css";

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
