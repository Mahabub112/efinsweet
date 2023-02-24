import React from "react";

const FromInput = ({plc,plc1,plc2,plc3}) => {
  return (
    <>
      <input type="text" placeholder={plc} />
      <input type="email" placeholder={plc1} />
      <input type="text" placeholder={plc2} />
      <button className="btn">{plc3}</button>
    </>
  );
};

export default FromInput;
