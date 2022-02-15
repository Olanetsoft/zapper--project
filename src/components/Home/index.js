import React from "react";
import styled from "styled-components";
import HomeTabSection from "./HomeTabSection";
import ReplyIcon from "@mui/icons-material/Reply";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const Container = styled.div`
  border-right: 2px solid grey;
  padding: 20px 0px 0 0px;
  flex: 8;
  position: relation;
  overflow: scroll;
  @media (max-width: 768px) {
    display: flex;
    padding: 20px;
  }
`;

const HeaderBar = styled.div`
  background: rgb(153, 77, 107);
  background: linear-gradient(
    90deg,
    rgba(153, 77, 107, 1) 0%,
    rgba(127, 64, 136, 1) 35%,
    rgba(89, 45, 172, 1) 100%
  );
  height: 150px;
`;

const HeaderProfile = styled.div`
  z-index: 0;
  height: 150px;
  cursor: pointer;
  background-image: url("https://source.unsplash.com/random/150x150");
  z-index: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  border-radius: 50%;
  width: 150px;
  /* position: fixed; */
  border: 1px solid black;
  margin-left: 10px;
  top: 0;
  left: 0;
  right: 0;
  margin: -100px 0;
  position: relative;
  border: 1px solid black;
  margin-left: 10px;
  &:hover {
    background-color: red !important;
  }
`;

const ProfileWrapper = styled.div`
  display:flex:
  position:relative;
`;
const ShareProfile = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: 5px 20px;
  background-color: inherit;
`;
const DivReplyIcon = styled(ReplyIcon)``;
const ShareWrapper = styled.div`
  padding: 2px 10px;
  border-radius: 5px;
  transform: rotateY(180deg);
  &:hover {
    border: 1px solid rgb(199, 210, 218);
    transition: ease-in-out 2s;
    cursor: pointer;
    box-shadow: 0px 0px 16px -10px white;
    -webkit-box-shadow: 0px 0px 16px -10px rgba(0, 0, 0, 1);
    -moz-box-shadow: 0px 0px 16px -10px rgba(0, 0, 0, 1);
  }
`;
const AccountInfo = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-wrao: wrap;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 50px 20px;
`;
const AccountAddress = styled.div``;
const TopAddress = styled.div`
  color: rgb(255, 255, 255);
  font-size: 30px;
  fill: gray !important;
  font-weight: 600;
`;
const AccountNetWorth = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 100%;
  padding: 0 80px;
  align-items: center;
`;
const AddressDetail = styled.div`
  display: flex;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
`;
const AddressCopy = styled(ContentCopyIcon)`
  cursor: pointer;
  fill: gray !important;
  margin-left: 5px;
`;
const BottomAddress = styled.div`
  fill: gray !important;
`;
const FooterIcon = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-right: 5px;
  width: 100%;
  gap: 10px;
`;

const NetWorthHead = styled.div`
  display: -webkit-box;
  flex-direction: column;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  // align-items: center;

  gap: 10px;
`;

const NetWorthArrow = styled(ArrowDropDownIcon)`
  font-size: medium !important;
  &:hover {
    cursor: pointer;
  }
`;
const NetWorthHeadWrapper = styled.div`
  display: flex;
`;
const AmountBalance = styled.div`
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;    
      display: flex;
      width: 100%;
      -webkit-flex-direction: row;
      -ms-flex-direction: row;
      -webkit-flex-direction: row;
      font-weight: 700;
      font-size:20px;
      -ms-flex-direction: row;
      flex-direction: row;
      -webkit-box-pack: start;
      -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
      -webkit-box-pack: start;
      -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      text-align: left;
      -webkit-align-items: flex-start;
      -webkit-box-align: flex-start;
      -ms-flex-align: flex-start;
      -webkit-align-items: flex-start;
      -webkit-box-align: flex-start;
      -ms-flex-align: flex-start;
      align-items: flex-start;
  }
  `;

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
function Home() {
  return (
    <Container>
      <ContainerWrapper>
        <HeaderBar />
        <ProfileWrapper>
          <HeaderProfile></HeaderProfile>
        </ProfileWrapper>

        <ShareProfile>
          <ShareWrapper>
            <DivReplyIcon />
          </ShareWrapper>
        </ShareProfile>

        <AccountInfo>
          <AccountAddress>
            <TopAddress>0xc128...6eb8</TopAddress>
            <AddressDetail>
              <BottomAddress>0xc128...6eb8</BottomAddress>
              <FooterIcon>
                <AddressCopy></AddressCopy>
              </FooterIcon>
            </AddressDetail>
          </AccountAddress>
          <AccountNetWorth>
            <NetWorthHead>
              <NetWorthHeadWrapper>
                Net Worth
                <NetWorthArrow />
              </NetWorthHeadWrapper>
              <AmountBalance>$00.000</AmountBalance>
            </NetWorthHead>
          </AccountNetWorth>
        </AccountInfo>
        <TabSection>
          <HomeTabSection />
        </TabSection>
      </ContainerWrapper>
    </Container>
  );
}

const TabSection = styled.div``;

export default Home;
