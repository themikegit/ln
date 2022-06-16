import Card from "../layout/Card";

import ProfileInfo from "./ProfileInfo";
import ProfileInsights from "./ProfileInsight";
import ProfileStats from "./ProfileStats";

const LeftContent = () => {
  return (
    <Card>
      <ProfileInfo></ProfileInfo>
      <ProfileStats></ProfileStats>
      <ProfileInsights></ProfileInsights>
    </Card>
  );
};

export default LeftContent;
