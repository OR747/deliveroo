import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import Meals from "./components/Meals";

function App() {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    try {
      const response = await axios.get("https://delive-backend.herokuapp.com/");
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    console.log("Rentre dans le useEffect");
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <div>
      <Header />
      <div className="container1">
        <div className="text">
          <h1>{data.restaurant.name}</h1>
          <p>{data.restaurant.description}</p>
        </div>
        <hr />
        <div className="picture">
          <img src={data.restaurant.picture} alt="" />
        </div>
      </div>
      <div className="container2">
        <div className="meals">
          <Meals
            data={data.categories}
            products={products}
            setProducts={setProducts}
          />
        </div>

        <div className="panier">
          {products.map((product) => {
            return (
              <div>
                <p>{products.title}</p>
                <p>{products.price}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
