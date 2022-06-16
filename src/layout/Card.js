import styled from "styled-components";
const Section = styled.div`
  background-color: #fff;
  margin: 5px;
  border-radius: 10px;
  border: 1px solid #d6d6d6;
`;
const Card = (props) => {
  return <Section>{props.children}</Section>;
};

export default Card;
