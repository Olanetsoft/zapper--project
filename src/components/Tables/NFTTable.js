import React from "react";
import { Table, Tr } from "styled-table-component";

const NFTTable = ({ nftData }) =>
  nftData ? (
    <Table bordered>
      <thead>
        <tr>
          <th scope="col">NFT Name</th>
          <th scope="col">Contract Type</th>
          <th scope="col">Token ID</th>
          <th scope="col">Token Address</th>
        </tr>
      </thead>
      <tbody>
        {nftData.length !== 0 ? (
          nftData.result.map((element, i) => {
            return (
              <Tr key={i} active>
                <td>{element.name}</td>
                <td>{element.contract_type}</td>
                <td>{`${element.token_id.slice(
                  0,
                  4
                )}...${element.token_id.slice(
                  element.token_id.length - 8
                )}`}</td>
                <td>{`${element.token_address.slice(
                  0,
                  4
                )}...${element.token_address.slice(
                  element.token_address.length - 8
                )}`}</td>
              </Tr>
            );
          })
        ) : (
          <Tr>
            <td>No NFT(s) Found!</td>
          </Tr>
        )}
      </tbody>
    </Table>
  ) : (
    <p>Loading...</p>
  );
export default NFTTable;
