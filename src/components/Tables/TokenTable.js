import React from "react";
import { Table, Tr, p } from "styled-table-component";

const TokenTable = ({ tokenData }) =>
  tokenData ? (
    <Table bordered>
      <thead>
        <tr>
          <th scope="col">Token Name</th>
          <th scope="col">Balance</th>
          <th scope="col">Token ID</th>
          <th scope="col">Symbol</th>
        </tr>
      </thead>
      <tbody>
        {tokenData.length !== 0 ? (
          tokenData.result.map((element, i) => {
            return (
              <Tr key={i} active>
                <td>{element.name}</td>
                <td>{element.balance / ("1e" + element.decimals)}</td>
                <td>{element.symbol}</td>
              </Tr>
            );
          })
        ) : (
          <Tr>
            <td>No Token(s) Found!</td>
          </Tr>
        )}
      </tbody>
    </Table>
  ) : (
    <p>Loading...</p>
  );
export default TokenTable;
