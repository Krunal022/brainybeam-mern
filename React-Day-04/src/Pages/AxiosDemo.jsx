import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";

const AxiosDemo = () => {
  let [productList, setProductList] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      console.log(response.data.products);
      setProductList(response.data.products);
    } catch (error) {
      console.log("Error fetching products:", error);
    }
  };

  return (
    <div>
      <div className="container my-3">
        <h1 className="text-center fw-medium">All Products</h1>
        <p className="text-muted text-center">
          Products fetched dynamically using <strong>Axios</strong> and rendered
          with reusable card components.
        </p>
      </div>

      <div className="card-container">
        {productList.map((item) => {
          return <Card item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default AxiosDemo;
