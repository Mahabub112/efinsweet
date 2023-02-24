import React from "react";
import "./layout.css";
const Layout = ({title,para,img}) => {
  return (
    <div className="partition-1">
      <img src={img} alt="pointer" />
      <h2>{title}</h2>
      <p>
        {para}
      </p>
    </div>
  );
};

export default Layout;
