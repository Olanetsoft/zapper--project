import React from "react";
import { Table, Tr } from "styled-table-component";

const NFTTable = (props) => (
  <Table bordered>
    <thead>
      <tr>
        <th scope="col">Header</th>
        <th scope="col">Header</th>
        <th scope="col">Header</th>
        <th scope="col">Header</th>
      </tr>
    </thead>
    <tbody>
      <Tr active>
        <td>Body</td>
        <td>Body</td>
        <td>Body</td>
        <td>Body</td>
      </Tr>
      <Tr active>
        <td>Body</td>
        <td>Body</td>
        <td>Body</td>
        <td>Body</td>
      </Tr>
      <Tr active>
        <td>Body</td>
        <td>Body</td>
        <td>Body</td>
        <td>Body</td>
      </Tr>
    </tbody>
  </Table>
);
export default NFTTable;
