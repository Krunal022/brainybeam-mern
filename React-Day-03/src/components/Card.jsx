import React from "react";

const Card = ({ item }) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={item.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.description}</p>
          <a href="#" className="btn btn-primary">
            Add to Cart ▸
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
