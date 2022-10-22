import { NavigationBar } from "../../../components/bars/NavigationBar";
import { WrapperDefault } from "../../../components/containers/WrapperDefault";
import { Column } from "../../../components/containers/Column";
import { HalfVertical } from "../../../components/containers/HalfVertical";

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
          <HalfVertical/>
          <HalfVertical/>
        </Column>
      </WrapperDefault>
    </>
  );
};

export default AdminSells;
