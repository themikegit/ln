import styled from "styled-components";
const Wrap = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 3fr 2fr;
  padding: 10px;
`;

const Layout = (props) => {
  return <Wrap>{props.children}</Wrap>;
};

export default Layout;
