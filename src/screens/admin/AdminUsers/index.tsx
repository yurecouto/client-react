import React from "react";

import { NavigationBar } from "../../../components/bars/NavigationBar";
import { Row } from "../../../components/containers/rows/Row";
import { WrapperDefault } from "../../../components/containers/centred/WrapperDefault";
import { VerticalReadItem } from "../../../components/others/VerticalReadItem";
import { LineDefault } from "../../../components/others/LineDefault";
import { PageFooter } from "../../../components/footers/PageFooter";
import { GenericContainer } from "../../../components/containers/generic/GenericContainer";
import { HeaderDefault } from "../../../components/headers/HeaderDefault";
import { SearchInput } from "../../../components/inputs/SearchInput";
import { CustomContainer } from "../../../components/containers/centred/CustomContainer";

const AdminUsers = () => {
  // const user = useSelector(selectUser);
  // const token = useSelector(selectToken);
  // const theme = useSelector(selectTheme);

  const seriesLine = [152, 222, 221, 76, 151, 228, 93, 78, 157, 110, 109, 200, 258, 229, 135, 170, 121, 96, 202, 250, 34];
  const seriesBar = [159, 129, 182, 251, 237, 173, 113, 28, 253, 253, 126, 213, 134, 246, 59, 273, 172, 288, 113, 113, 206];

  return (
    <>
      <NavigationBar page={window.location.pathname}/>

      <WrapperDefault>
        <Row justifyContent="space-around">
          <CustomContainer
            width="70%"
          >
            <GenericContainer>
              <HeaderDefault
                title="Users"
              >
                <SearchInput/>
              </HeaderDefault>
              <VerticalReadItem
                name={"User name"}
                description={"Short description about the item"}
                info={"Developer"}
              />
              <LineDefault/>
              <VerticalReadItem
                name={"User name"}
                description={"Short description about the item"}
                info={"Developer"}
              />
              <LineDefault/>
              <VerticalReadItem
                name={"User name"}
                description={"Short description about the item"}
                info={"Developer"}
              />
              <LineDefault/>
              <VerticalReadItem
                name={"User name"}
                description={"Short description about the item"}
                info={"Developer"}
              />
              <LineDefault/>
              <VerticalReadItem
                name={"User name"}
                description={"Short description about the item"}
                info={"Developer"}
              />
              <LineDefault/>
              <VerticalReadItem
                name={"User name"}
                description={"Short description about the item"}
                info={"Developer"}
              />
              <LineDefault/>
              <VerticalReadItem
                name={"User name"}
                description={"Short description about the item"}
                info={"Developer"}
              />
              <LineDefault/>
              <VerticalReadItem
                name={"User name"}
                description={"Short description about the item"}
                info={"Developer"}
              />
              <LineDefault/>
              <VerticalReadItem
                name={"User name"}
                description={"Short description about the item"}
                info={"Developer"}
              />
              <LineDefault/>
              <VerticalReadItem
                name={"User name"}
                description={"Short description about the item"}
                info={"Developer"}
              />
              <LineDefault/>
              <VerticalReadItem
                name={"User name"}
                description={"Short description about the item"}
                info={"Developer"}
              />
              <LineDefault/>
            </GenericContainer>
            <PageFooter/>
          </CustomContainer>
        </Row>
      </WrapperDefault>
    </>
  );
};

export default AdminUsers;
