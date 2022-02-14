import React from "react";
import styled from "styled-components";
import Card from "./Card";
import Chart from "./Chart";
const Container = styled.div`
  padding: 20px 0 0 0;
  flex: 3;
  height: 1000px;

  overflow: scroll;
  scrollbar-width: none;
  flex-direction: column;
`;

function RightBar() {
  return (
    <Container>
      <CardWrapper>
        <Card
          key="1"
          heading="No bundles added yet"
          leftTExt="My Bundles"
          rightText=""
          icon=""
          subHeading="text"
        />
      </CardWrapper>
      <ChartWrapper>
        <Chart />
      </ChartWrapper>
    </Container>
  );
}
const ChartWrapper = styled.div`
  padding: 12px;
`;
const CardWrapper = styled.div`
  padding: 12px;
`;
export default RightBar;
