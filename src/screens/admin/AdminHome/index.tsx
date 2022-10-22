import { NavigationBar } from "../../../components/bars/NavigationBar";
import { WrapperDefault } from "../../../components/containers/WrapperDefault";
import { Column } from "../../../components/containers/Column";
import { HalfVerticalContainer } from "../../../components/containers/HalfVerticalContainer";
import { Row } from "../../../components/containers/Row";
import { QuartHorizontalContainer } from "../../../components/containers/QuartHorizontalContainer";

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
            <QuartHorizontalContainer/>
            <QuartHorizontalContainer/>
          </Row>
          <HalfVerticalContainer/>
        </Column>
      </WrapperDefault>
    </>
  );
};

export default AdminHome;
