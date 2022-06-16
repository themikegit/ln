import Avatar from "./Avatar";
import styled from "styled-components";
import PersonDetails from "./PersonDetails";
const Wrap = styled.div`
  display: flex;
  align-items: center;
`;

const Person = (props) => {
  return (
    <Wrap>
      <Avatar size="medium"></Avatar>
      <PersonDetails></PersonDetails>
    </Wrap>
  );
};

export default Person;
