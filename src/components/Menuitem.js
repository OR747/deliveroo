import React from "react";

const MenuItem = ({ data, products, setProducts }) => {
  return (
    <div
      className="menu-item-container"
      onClick={() => {
        const newProducts = [...products];
        newProducts.push({ title: data.title, quantity: 1, price: data.price });
        setProducts(newProducts);
      }}
    >
      <div className="item">
        <div className="title">
          <p>{data.title}</p>
        </div>
        <div className="description">
          <p>{data.description && data.description.slice(0, 60) + "..."}</p>
        </div>
        <div className="price">
          <p>{data.price}</p>
          <p>€</p>
        </div>
      </div>
      <div className="image">
        {data.picture && (
          <img
            style={{ height: 130, width: 130 }}
            src={data.picture}
            alt={data.title}
          />
        )}
      </div>
    </div>
  );
};

export default MenuItem;
