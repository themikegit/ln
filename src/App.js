import "./App.css";
import axios from "axios";
import styled from "styled-components";
import Navigation from "./components/Navigation";
import Layout from "./layout/Layout";
import CenterContent from "./components/CenterContent";
import RightContent from "./components/RightContent";
import LeftContent from "./components/LeftContent";
import Column from "./layout/Column";
import { useEffect, useState } from "react";
const Body = styled.div`
  padding: 1%;
  padding-top: 0;
  background-color: #f9ecec;
  padding: 0 15%;
`;
function App() {
  const [posts, setPosts] = useState();
  useEffect(() => {
    axios.get("database.json").then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <Body>
      <Navigation></Navigation>
      <Layout>
        <Column>
          <LeftContent></LeftContent>
        </Column>
        <Column>
          <CenterContent></CenterContent>
        </Column>
        <Column>
          <RightContent></RightContent>
        </Column>
      </Layout>
    </Body>
  );
}

export default App;
