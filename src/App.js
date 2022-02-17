import React from "react";
import styled from "styled-components";
import LeftBar from "./components/Nav/LeftBar";
import Home from "./components/Home";
import RightBar from "./components/Nav/RightBar";

const Container = styled.div`
  margin: 0;
  padding: 0 200px;
  top: 0;
  background-color: #141a1e;
  width: 100vw;
  position: fixed;
  background-color: #141a1e;
  height: 100vh;
  display: flex;
  color: white;
  background-color: inherit;
  justify-content: space-between;
  flex: 1;
  @media (max-width: 768px) {
    padding: 0 50px;
  }
`;

const Button = styled.button`
  width: 20rem;
  font-size: 1em;
  margin: 1em;
  padding: 0.95em 1em;
  border: 2px solid royalblue;
  border-radius: 30px;
  color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

function App() {
  return (
    <Container>
      <LeftBar />
      <Home />
      <RightBar />
    </Container>
  );
}

export default App;
