import React from "react";

import MenuItem from "../components/Menuitem";

const Category = ({ data }) => {
  return (
    data.meals.length > 0 && (
      <div>
        <div className="category">
          <h3>{data.name}</h3>
          <div className="menu-category">
            {data.meals.map((item, index) => {
              return <MenuItem key={item.id} data={item} />;
            })}
          </div>
        </div>
      </div>
    )
  );
};

export default Category;
