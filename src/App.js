import "./App.css";

import styled from "styled-components";
import Navigation from "./components/Navigation";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";
import { HomePage } from "./components/Home.page";
import { CommonProvider, ModalContext, ModalProvider } from "./CommonContext";
import { useContext } from "react";
const Body = styled.div`
  padding: 1%;
  padding-top: 0;

  padding: 0 15%;
`;

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
        <Body>
          <Router>
            <Navigation></Navigation>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/network" element={"inprogress"}></Route>
              <Route path="/jobs" element={"inprogress"}></Route>
            </Routes>
          </Router>
        </Body>
      </ModalProvider>
    </QueryClientProvider>
  );
}

export default App;
