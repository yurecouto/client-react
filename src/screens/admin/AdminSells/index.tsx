import { NavigationBar } from "../../../components/bars/NavigationBar";
import { WrapperDefault } from "../../../components/containers/WrapperDefault";
import { Column } from "../../../components/containers/Column";
import { HalfVerticalContainer } from "../../../components/containers/HalfVerticalContainer";

// import { styles } from "./styles.module.css";

const AdminSells = () => {
  // const user = useSelector(selectUser);
  // const token = useSelector(selectToken);
  //const theme = useSelector(selectTheme);

  return (
    <>
      <NavigationBar page={window.location.pathname}/>

      <WrapperDefault>
        <Column>
          <HalfVerticalContainer/>
          <HalfVerticalContainer/>
        </Column>
      </WrapperDefault>
    </>
  );
};

export default AdminSells;
