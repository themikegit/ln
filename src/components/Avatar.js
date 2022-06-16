import styled from "styled-components";
const ProfileImage = styled.div`
  width: ${(props) => (props.size === "large" ? "60px" : "30px")};
  height: ${(props) => (props.size === "large" ? "60px" : "30px")};
  border-radius: 50%;
  background-image: url("https://picsum.photos/id/237/200/300");
  background-size: contain;
`;
const Avatar = () => {
  return <ProfileImage></ProfileImage>;
};

export default Avatar;
