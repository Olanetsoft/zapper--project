import React, { useState } from "react";
import eth from "../../assets/img/eth.png";
import btc from "../../assets/img/btc.png";
import styled from "styled-components";
import zapper from "../../assets/img/zapper.png";
import avater from "../../assets/img/avater.png";
import HomeIcon from "@mui/icons-material/Home";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import SendAndArchiveIcon from "@mui/icons-material/SendAndArchive";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Container = styled.div`
  border-right: 2px solid gray;
  padding: 20px 20px 0 0;
  justify:content:flex-start;
  flex: 2;
  display:flex;
  flex-direction:column;
   @media (max-width: 768px) {
    display: none;
    padding:20px;
  }
  
`;
const Header = styled.div``;
const SidebarBrand = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    cursor: pointer;
  }
`;
const DropdownAccount = styled.div`
  padding: 10px 10px;
  margin-top: 50px;
  display: flex;
  &:hover {
    border-radius: 5px;
    cursor: pointer;
    opacity: 0.6;
  }
`;
const Logo = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  border-radius: 50%;
`;

const LogoText = styled.div`
  text-transform: capitalize;
  font-weight: 700;
  font-size: 24px;
`;
const Avater = styled.img`
  margin-right: 20px;
  border-radius: 50%;
`;

const CoinAddress = styled.div`
  background-color: rgb(32, 42, 48);
  &:hover {
    background-color: rgb(32, 42, 48);
  }
`;
const ArrowDropDown = styled(ArrowDropDownIcon)``;
function LeftBar({ address }) {
  const [show, setShow] = useState(false);

  return (
    <Container>
      <Header>
        <SidebarBrand>
          <Logo src={zapper} alt="logo" />
          <LogoText>zapper</LogoText>
        </SidebarBrand>
        <DropdownAccount>
          <Avater src={avater} alt="" />
          {address && (
            <CoinAddress>
              <div>{`${address.slice(0, 4)}...${address.slice(
                address.length - 6
              )}`}</div>
              <div>
                <div>{`${address.slice(0, 4)}...${address.slice(
                  address.length - 6
                )}`}</div>
              </div>
            </CoinAddress>
          )}
          <div>
            <ArrowDropDown />
          </div>
        </DropdownAccount>
      </Header>
      <MenuWrapper>
        <Menu>
          <List>
            {" "}
            <span>
              <HomeIcon />
            </span>{" "}
            Home
          </List>
          <List>
            {" "}
            <span>
              <CompareArrowsIcon />
            </span>{" "}
            Exchange
          </List>
          <List>
            <span>
              <BookmarkIcon />
            </span>
            Bridge
          </List>
          <List>
            <span>
              <BookmarkIcon />
            </span>
            Pool
          </List>
          <List>
            {" "}
            <span>
              <SendAndArchiveIcon />
            </span>{" "}
            Save
          </List>
          <List>
            {" "}
            <span>
              <BookmarkIcon />
            </span>{" "}
            Address Book
          </List>
          <List>
            {" "}
            <span>
              <MoreHorizIcon />
            </span>{" "}
            More
          </List>
        </Menu>
      </MenuWrapper>

      <LeftFooter>
        <CoinMenu show={show} onClick={() => setShow(!show)}>
          <MenuHead>Select Network</MenuHead>
          <Cols>
            <FirstCol>
              {coinsData.map((item, index) => {
                return (
                  <li key={item.id}>
                    <img src={item.img} alt={item.title} />
                    <span>{item.title}</span>
                  </li>
                );
              })}
            </FirstCol>
            <SecondCol>
              {coinsData.map((item, index) => {
                return (
                  <li key={item.id}>
                    <img src={item.img} alt={item.title} />
                    <span>{item.title}</span>
                  </li>
                );
              })}
            </SecondCol>
          </Cols>
        </CoinMenu>
        <Ethereum onClick={() => setShow(!show)}>
          <EthImage src={eth} alt="" /> Ethereum <UpArrow />
        </Ethereum>
      </LeftFooter>
    </Container>
  );
}
export default LeftBar;
const coinsData = [
  { id: 1, img: btc, title: "Btc" },
  { id: 2, img: btc, title: "Eth" },
  { id: 3, img: btc, title: "Shib" },
  { id: 4, img: btc, title: "Alt" },
  { id: 5, img: btc, title: "Doge" },
];

const CoinMenu = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  position: absolute;
  transition: transform 0.3s ease-in;
  background-color: #141a1e;
  height: 400px;
  width: 400px;
  flex-direction: column;
  border-radius: 10px;
  padding: 10px;
  z-index: 12;
  margin: -370px 0 0 0;
  box-shadow: 0px 0px 16px -10px whitesmoke;
  -webkit-box-shadow: 0px 0px 16px -10px whitesmoke;
  -moz-box-shadow: 0px 0px 16px -10px whitesmoke;
`;
const FirstCol = styled.ul`
  list-style: none;

  li {
    display: flex;
    align-items: center;
    gap: 10px;

    padding: 10px;
    border-radius: 5px;

    &:hover {
      cursor: pointer;
      background-color: grey;
    }
    img {
      background-color: inherit;
      width: 30px;
      height: 30px;
    }
    span {
      background-color: inherit;
      font-weight: 700;
      font-size: 20px;
    }
  }
`;
const SecondCol = styled(FirstCol)``;
const Cols = styled.div`
  display: flex;
  flex-direction: row;
`;
// const MenuHead = styled.div``;
const MenuHead = styled.div`
  display: flex;

  transition: transform 0.3s ease-in;
  flex-direction: row;
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: flex-start;
  padding: 5px;
`;

const UpArrow = styled(ArrowDropUpIcon)`
  background-color: inherit;
`;
const Ethereum = styled.div`
  display: flex;
  cursor: pointer;
  padding: 15px 10px;
  align-items: center;
  border-radius: 10px;
  justify-content: space-between;
  gap: 10px;
  &:hover {
    background-color: grey;
    opacity: 0.6;
    transition: ease-in-out 0.3s;
  }
`;

const EthImage = styled.img`
  width: 30px;
  height: 30px;
  background-color: #617fea;
  padding: 5px;
  border-radius: 50%;
  align-items: center;
`;

const LeftFooter = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
  position: relative;
  justify-content: space-between;
`;

const MenuWrapper = styled.div`
  display: flex;
`;
const Menu = styled.ul`
  margin-top: 50px;
  list-style: none;
  display: flex;
  width: 100% !important;
  flex-direction: column;
  gap: 20px;
`;
const List = styled.li`
  display: flex;
  cursor: pointer;
  width: 100% !important;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }
`;
