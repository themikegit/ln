import axios from "axios";

import { useQuery } from "react-query";
import styled, { keyframes } from "styled-components";
import { getPosts } from "../api";
import Column from "../layout/Column";
import Layout from "../layout/Layout";
import CenterContent from "./CenterContent";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

export const HomePage = () => {
  // const [data, setData] = useState([]);
  // const [loading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   axios.get("http://localhost:4000/posts").then((res) => {
  //     setTimeout(() => {
  //       setData(res.data);
  //       setIsLoading(false);
  //     }, 2000);
  //   });
  // }, []);

  interface Response {
    isLoading: boolean;
    data: Array<any>;
  }

  const { isLoading, data } = useQuery("db-posts", getPosts());

  return (
    <Layout>
      <Column>
        <LeftContent></LeftContent>
      </Column>
      <Column>
        <CenterContent>
          {isLoading ? (
            <Shine></Shine>
          ) : (
            data.data.map((item, i) => (
              <div key={i}>
                <h4> {item.title} </h4>
                <p> {item.content} </p>
              </div>
            ))
          )}
        </CenterContent>
      </Column>
      <Column>
        <RightContent></RightContent>
      </Column>
    </Layout>
  );
};

const shimmering = keyframes`
0% {background-position: -468px 0px;}
100% {background-position: 468px 0px;}`;

const Shine = styled.div`
  width: 500px;
  height: 200px;
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-repeat: no-repeat;
  background-size: 800px 104px;
  display: inline-block;
  position: relative;
  animation-name: ${shimmering};
  -webkit-animation-duration: 1s;
  -webkit-animation-fill-mode: forwards;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-name: placeholderShimmer;
  -webkit-animation-timing-function: linear;
`;
