import { useEffect, useState } from "react";
import Card from "../layout/Card";

const CenterContent = () => {
  const [value, setValue] = useState(0);
  const [valuex, setValuex] = useState(10);
  useEffect(() => {
    if (valuex === 5) {
      console.log("its five");
    }
  }, [valuex]);

  const clickUp = () => {
    setValue(value + 1);
  };
  const clickDownx = () => {
    setValuex(valuex - 1);
  };
  return (
    <>
      <div>
        <h4>
          {" "}
          {value}
          {valuex}{" "}
        </h4>
        <button onClick={clickUp}>UP</button>{" "}
        <button onClick={clickDownx}>DOWN</button>
      </div>

      <Card>
        <p>image and profile info</p>
      </Card>
      <Card>
        <p>Wall</p>
      </Card>
    </>
  );
};

export default CenterContent;
