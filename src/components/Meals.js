import React from "react";

import Category from "./Category";

const Meals = ({ data }) => {
  return (
    <div className="menu-container">
      {data.map((category, index) => {
        return <Category key={index} data={category} />;
      })}
    </div>
  );
};

export default Meals;
