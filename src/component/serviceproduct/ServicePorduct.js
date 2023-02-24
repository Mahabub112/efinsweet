import React from "react";
import "./serviceporduct.css"
const ServicePorduct = ({titles,para,img}) => {
  return (
    <div className="partition-1">
      <img src={img} alt="pointer" />
      <h2>{titles}</h2>
      <p>
        {para}
      </p>
    </div>
  );
};

export default ServicePorduct;
