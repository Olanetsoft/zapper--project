import React from "react";
import { Table, Tr } from "styled-table-component";

const HistoryTable = ({ transactionData }) =>
  transactionData ? (
    <Table bordered>
      <thead>
        <tr>
          <th scope="col">Block Number</th>
          <th scope="col">Block Hash</th>
          <th scope="col">From</th>
          <th scope="col">To</th>
          <th scope="col">Value</th>
        </tr>
      </thead>
      <tbody>
        {transactionData.length !== 0 ? (
          transactionData?.result?.map((element, i) => {
            return (
              <Tr key={i} active>
                <td>{element.block_number}</td>
                <td>{`${element.block_hash.slice(
                  0,
                  4
                )}...${element.block_hash.slice(
                  element.block_hash.length - 8
                )}`}</td>
                <td>{`${element.from_address.slice(
                  0,
                  4
                )}...${element.from_address.slice(
                  element.from_address.length - 8
                )}`}</td>
                <td>{`${element.to_address.slice(
                  0,
                  4
                )}...${element.to_address.slice(
                  element.to_address.length - 8
                )}`}</td>
                <td>{(element.value / 1e18).toFixed(5)}</td>
              </Tr>
            );
          })
        ) : (
          <Tr>
            <td>No Transaction(s) Found!</td>
          </Tr>
        )}
      </tbody>
    </Table>
  ) : (
    <p>Loading...</p>
  );
export default HistoryTable;
