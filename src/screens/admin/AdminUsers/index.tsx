import { NavigationBar } from "../../../components/bars/NavigationBar";
import { HalfColumn } from "../../../components/containers/HalfColumn";
import { HalfHorizontalContainer } from "../../../components/containers/HalfHorizontalContainer";
import { QuartVerticalContainer } from "../../../components/containers/QuartVerticalContainer";
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
            <QuartVerticalContainer/>

            <QuartVerticalContainer/>
          </HalfColumn>
          <HalfHorizontalContainer/>
        </Row>
      </WrapperDefault>
    </>
  );
};

export default AdminUsers;
