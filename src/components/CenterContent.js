import Card from "../layout/Card";

const CenterContent = (props) => {
  return (
    <>
      <Card>
        <p>image and profile info</p>
      </Card>
      <Card>
        <p>Wall</p>
      </Card>
      <div>{props.children}</div>
    </>
  );
};

export default CenterContent;
