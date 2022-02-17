import React, { useState } from "react";
import styled from "styled-components";
import zapper from "../../assets/img/zapper.png";
import avater from "../../assets/img/avater.png";
import HomeIcon from "@mui/icons-material/Home";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import SendAndArchiveIcon from "@mui/icons-material/SendAndArchive";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import Chains from "../../utils/chains";

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
function LeftBar({ address, value, handleChange }) {
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
        <Select value={value} onChange={handleChange}>
          {Chains.map((chain) => (
            <Option key={chain.key} value={chain.value}>
              {chain.name}
            </Option>
          ))}
        </Select>
      </LeftFooter>
    </Container>
  );
}
export default LeftBar;

const Select = styled.select`
  width: 100%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 10px;
  font-size: 18px;
  font-weight: 500;
  color: #333;
  background-color: #fff;
  background-image: none;
  background-repeat: no-repeat;
  background-position: right;
  background-size: auto;
  &:focus {
    outline: none;
  }
`;

const Option = styled.option`
  font-size: 18px;
  font-weight: 500;
  color: #333;
  background-color: #fff;
  background-image: none;
  background-repeat: no-repeat;
  background-position: right;
  background-size: auto;
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
