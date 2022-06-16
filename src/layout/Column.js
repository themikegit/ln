import styled from "styled-components";
const Section = styled.div``;
const Column = (props) => {
  return <Section>{props.children}</Section>;
};

export default Column;
