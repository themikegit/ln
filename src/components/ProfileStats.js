import styled from "styled-components";

const ProfileStats = () => {
  return (
    <StatsList>
      <li>Who view your profile: 43</li>
      <li>Connections: 12 </li>
      <li>Growth: 3</li>
    </StatsList>
  );
};

export default ProfileStats;

const StatsList = styled.div`
  list-style: none;
`;
