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
      <div>
        <p>{data.title}</p>
        <p>{data.description && data.description.slice(0, 60) + "..."}</p>
        <p>{data.price}</p>
      </div>
      {data.picture && (
        <img style={{ height: 100 }} src={data.picture} alt={data.title} />
      )}
    </div>
  );
};

export default MenuItem;
