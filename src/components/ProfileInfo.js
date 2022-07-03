import Avatar from "./Avatar";
import styled from "styled-components";
import PersonDetails from "./PersonDetails";
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`;

const ProfileInfo = () => {
  return (
    <Wrap>
      <Avatar size="large"></Avatar>
      <PersonDetails></PersonDetails>
    </Wrap>
  );
};

export default ProfileInfo;
