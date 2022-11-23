import React from "react";

import { NavigationBar } from "../../../components/bars/NavigationBar";
import MixedChart from "../../../components/charts/MixedChart";
import PieChart from "../../../components/charts/PieChart";
import { CustomContainer } from "../../../components/containers/centred/CustomContainer";
import { WrapperDefault } from "../../../components/containers/centred/WrapperDefault";
import { HalfColumn } from "../../../components/containers/columns/HalfColumn";
import { GenericContainer } from "../../../components/containers/generic/GenericContainer";
import { HalfHorizontal } from "../../../components/containers/halfs/HalfHorizontal";
import { QuartVertical } from "../../../components/containers/quarts/QuartVertical";
import { Row } from "../../../components/containers/rows/Row";
import { PageFooter } from "../../../components/footers/PageFooter";
import { HeaderDefault } from "../../../components/headers/HeaderDefault";
import { ImageDefault } from "../../../components/images/ImageDefault";
import { LineDefault } from "../../../components/others/LineDefault";
import { VerticalReadItem } from "../../../components/others/VerticalReadItem";
import { SubtitleDefault } from "../../../components/texts/SubtitleDefault";
import { TextDefault } from "../../../components/texts/TextDefault";

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
            <QuartVertical>
              <ImageDefault
                uri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoAKBou4dEvD7x_eMmQQlsZOYfoC8Pm8F_2Q&usqp=CAU"
                height="42"
              />
              <CustomContainer
                height="42vh"
                width="45%"
              >
                <Row>
                  <SubtitleDefault
                    subtitle="Product: "
                  />

                  <TextDefault
                    text="Bass"
                  />
                </Row>
                <LineDefault/>
                <Row>
                  <SubtitleDefault
                    subtitle="Price: "
                  />

                  <TextDefault
                    text="$10.00"
                  />
                </Row>
                <LineDefault/>
                <Row>
                  <SubtitleDefault
                    subtitle="Description: "
                  />

                  <TextDefault
                    text="Music Stuff"
                  />
                </Row>
                <LineDefault/>
                <Row>
                  <SubtitleDefault
                    subtitle="Sales: "
                  />

                  <TextDefault
                    text="200"
                  />
                </Row>
                <LineDefault/>
                <Row>
                  <SubtitleDefault
                    subtitle="Available: "
                  />

                  <TextDefault
                    text="10"
                  />
                </Row>
              </CustomContainer>
            </QuartVertical>
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
