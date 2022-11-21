import React from "react";

import { SwitchTheme } from "../../../components/buttons/SwitchTheme";
import { NavigationBar } from "../../../components/bars/NavigationBar";
import { WrapperDefault } from "../../../components/containers/centred/WrapperDefault";
import { CustomContainer } from "../../../components/containers/centred/CustomContainer";
import { Row } from "../../../components/containers/rows/Row";
import { HeaderDefault } from "../../../components/headers/HeaderDefault";
import { SubtitleDefault } from "../../../components/texts/SubtitleDefault";
import { GenericContainer } from "../../../components/containers/generic/GenericContainer";
import { PageFooter } from "../../../components/footers/PageFooter";
import { FooterDefault } from "../../../components/footers/FooterDefault";

// import { styles } from "./styles.module.css";

const AdminSettings = () => {
  // const user = useSelector(selectUser);
  // const token = useSelector(selectToken);
  // const theme = useSelector(selectTheme);

  return (
    <>
      <NavigationBar page={window.location.pathname}/>

      <WrapperDefault>
        <Row justifyContent="center">
          <CustomContainer
            width="33%"
            height="96vh"
          >
            <GenericContainer>
              <HeaderDefault
                title={"Settings"}
              />
              <Row>
                <SubtitleDefault
                  subtitle={"Theme:"}
                />
                <SwitchTheme/>
              </Row>
              <Row>
                <SubtitleDefault
                  subtitle={"Language:"}
                />
                <SwitchTheme/>
              </Row>
            </GenericContainer>

            <FooterDefault
              title="Logout"
            />
          </CustomContainer>
        </Row>
      </WrapperDefault>
    </>
  );
};

export default AdminSettings;
