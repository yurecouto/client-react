import React from "react";

import { NavigationBar } from "../../../components/bars/NavigationBar";
import MixedChart from "../../../components/charts/MixedChart";
import PieChart from "../../../components/charts/PieChart";
import { WrapperDefault } from "../../../components/containers/centred/WrapperDefault";
import { HalfColumn } from "../../../components/containers/columns/HalfColumn";
import { GenericContainer } from "../../../components/containers/generic/GenericContainer";
import { HalfHorizontal } from "../../../components/containers/halfs/HalfHorizontal";
import { QuartVertical } from "../../../components/containers/quarts/QuartVertical";
import { Row } from "../../../components/containers/rows/Row";
import { PageFooter } from "../../../components/footers/PageFooter";
import { HeaderDefault } from "../../../components/headers/HeaderDefault";
import { LineDefault } from "../../../components/others/LineDefault";
import { VerticalReadItem } from "../../../components/others/VerticalReadItem";

const AdminProducts = () => {
  // const user = useSelector(selectUser);
  // const token = useSelector(selectToken);
  //const theme = useSelector(selectTheme);

  const seriesB = [44, 55, 13, 43, 22, 35, 30];
  const labelsB = ["Team A", "Team B", "Team C", "Team D", "Team E", "Team F", "Team G"];

  return (
    <>
      <NavigationBar page={window.location.pathname}/>

      <WrapperDefault>
        <Row>
          <HalfColumn>
            <QuartVertical/>
            <QuartVertical>
              <PieChart
                  series={seriesB}
                  labels={labelsB}
                />
            </QuartVertical>
          </HalfColumn>
          <HalfHorizontal>
            <HeaderDefault
              title={"Products"}
            />
            <GenericContainer>
              <VerticalReadItem
                name={"Product name"}
                description={"Short description about the item"}
                info={"Developer"}
              />
              <LineDefault/>
              <VerticalReadItem
                name={"Product name"}
                description={"Short description about the item"}
                info={"Developer"}
              />
              <LineDefault/>
              <VerticalReadItem
                name={"Product name"}
                description={"Short description about the item"}
                info={"Developer"}
              />
              <LineDefault/>
              <VerticalReadItem
                name={"Product name"}
                description={"Short description about the item"}
                info={"Developer"}
              />
              <LineDefault/>
              <VerticalReadItem
                name={"Product name"}
                description={"Short description about the item"}
                info={"Developer"}
              />
              <LineDefault/>
              <VerticalReadItem
                name={"Product name"}
                description={"Short description about the item"}
                info={"Developer"}
              />
              <LineDefault/>
              <VerticalReadItem
                name={"Product name"}
                description={"Short description about the item"}
                info={"Developer"}
              />
              <LineDefault/>
              <VerticalReadItem
                name={"Product name"}
                description={"Short description about the item"}
                info={"Developer"}
              />
              <LineDefault/>
              <VerticalReadItem
                name={"Product name"}
                description={"Short description about the item"}
                info={"Developer"}
              />
              <LineDefault/>
              <VerticalReadItem
                name={"Product name"}
                description={"Short description about the item"}
                info={"Developer"}
              />
              <LineDefault/>
              <VerticalReadItem
                name={"Product name"}
                description={"Short description about the item"}
                info={"Developer"}
              />
              <LineDefault/>
            </GenericContainer>
            <PageFooter/>
          </HalfHorizontal>
        </Row>
      </WrapperDefault>
    </>
  );
};

export default AdminProducts;
