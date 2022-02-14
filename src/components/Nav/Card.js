import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const CardWrap = styled.div`
  height: 200px;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 10px;

  background-color: #1a2227;
`;
const CardHead = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  background-color: #1a2227;
  display: flex;
  justify-content: space-between;
`;
const Left = styled(CardHead)`
  font-weight: 700;
`;
const Right = styled(Left)``;
const CardContent = styled(CardHead)`
  padding: 5px;
  background-color: #141a1e;
  margin-top: 20px;
  height: 120px;
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
`;
const Head = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  text-align: center;
  font-weight: 600;
`;
const Text = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  text-align: center;
  font-weight: 400;
`;
function Card(props) {
  return (
    <Container>
      <CardWrap>
        <CardHead>
          <Left>My Bundles</Left>
          <Right>Right</Right>
        </CardHead>
        <CardContent>
          <Head>No bundles added yet</Head>
          <Text>Click on the (+) icon to add a bundle</Text>
        </CardContent>
      </CardWrap>
    </Container>
  );
}

export default Card;
