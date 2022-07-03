import { Link } from "react-router-dom";

import styled from "styled-components";

const Navigation = () => {
  return (
    <div>
      <NavigationWrap>
        <Link to="/">home</Link>
        <Link to="/network">network</Link>
        <Link to="/jobs">jobs</Link>
      </NavigationWrap>
    </div>
  );
};

export default Navigation;

const NavigationWrap = styled.div`
  list-style: none;
  display: flex;
  width: 300px;
  justify-content: space-around;
`;
