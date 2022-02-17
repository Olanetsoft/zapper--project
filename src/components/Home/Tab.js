import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import styled from "styled-components";

import NFTTable from "../Tables/NFTTable";
import TokenTable from "../Tables/TokenTable";
import HistoryTable from "../Tables/HistoryTable";

const TabWrapper = styled.div`
  padding: 5px 20px;
  // height: 900px;
  border: 1px solid gray;
`;

const TapHead = styled.div`
  font-weight: 700;
  padding: 10px 2px;
`;

export default function App({ nftData, tokenData, transactionData }) {
  console.log("tokenData", tokenData);
  return (
    <TabWrapper>
      <Tabs>
        <TabList>
          <TapHead>
            <Tab>NFTs</Tab>
            <Tab>Token</Tab>
            <Tab>History</Tab>
          </TapHead>
        </TabList>

        <TabPanel>
          <NFTTable nftData={nftData} />
        </TabPanel>
        <TabPanel>
          <TokenTable tokenData={tokenData} />
        </TabPanel>
        <TabPanel>
          <HistoryTable transactionData={transactionData} />
        </TabPanel>
      </Tabs>
    </TabWrapper>
  );
}
