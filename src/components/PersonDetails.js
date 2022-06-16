import styled from "styled-components";
const FullName = styled.h4`
  margin: 0;
  color: grey;
`;
const Title = styled.h5`
  margin: 0;
  color: blue;
`;
const PersonDetails = () => {
  return (
    <div>
      <FullName>Name</FullName>
      <Title>title</Title>
    </div>
  );
};

export default PersonDetails;
