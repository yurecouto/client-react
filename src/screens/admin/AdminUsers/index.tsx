import { NavigationBar } from "../../../components/bars/NavigationBar";
import { HalfColumn } from "../../../components/containers/HalfColumn";
import { HalfHorizontal } from "../../../components/containers/HalfHorizontal";
import { QuartVertical } from "../../../components/containers/QuartVertical";
import { Row } from "../../../components/containers/Row";
import { WrapperDefault } from "../../../components/containers/WrapperDefault";

// import { styles } from "./styles.module.css";

const AdminUsers = () => {
  // const user = useSelector(selectUser);
  // const token = useSelector(selectToken);
  // const theme = useSelector(selectTheme);

  return (
    <>
      <NavigationBar page={window.location.pathname}/>

      <WrapperDefault>
        <Row>
          <HalfColumn>
            <QuartVertical/>

            <QuartVertical/>
          </HalfColumn>
          <HalfHorizontal/>
        </Row>
      </WrapperDefault>
    </>
  );
};

export default AdminUsers;
