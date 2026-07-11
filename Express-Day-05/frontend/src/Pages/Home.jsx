import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();
  return (
    <section className="container py-5">
      <div className="row align-items-center min-vh-100">
        <div className="col-lg-6">
          <span className="badge bg-primary-subtle text-primary rounded-pill px-3 py-2 mb-3 fs-6">
            New Collection 2025
          </span>

          <h1
            className="display-2 fw-medium text-#2D465E"
            style={{ color: "#2D465E" }}
          >
            Discover Stylish
            <br />
            <span className="text-primary border-bottom border-4 border-primary">
              Fashion
            </span>
            For Every
            <br />
            Season
          </h1>

          <p className="text-secondary fs-5 mt-4 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            Vestibulum ante ipsum primis in faucibus.
          </p>

          <div className="d-flex gap-3 mb-5">
            <button
              onClick={() => navigate("./shop")}
              className="btn btn-primary btn-lg px-4"
            >
              Shop Now →
            </button>

            <button className="btn btn-outline-secondary btn-lg px-4">
              View Collection
            </button>
          </div>

          <div className="d-flex flex-wrap gap-4 text-secondary">
            <div>
              🚚 <span className="ms-2">Free Shipping</span>
            </div>

            <div>
              🛡️ <span className="ms-2">Secure Payment</span>
            </div>

            <div>
              🔄 <span className="ms-2">Easy Returns</span>
            </div>
          </div>
        </div>

        <div className="col-lg-6 text-center position-relative mt-5 mt-lg-0">
          <img
            src="https://bootstrapmade.com/content/demo/eStore/assets/img/product/product-f-9.webp"
            alt="Fashion"
            className="img-fluid"
            style={{ maxHeight: "700px", objectFit: "cover" }}
          />

          <div
            className="position-absolute top-0 end-0 bg-primary text-white rounded-circle d-flex flex-column justify-content-center align-items-center"
            style={{
              width: "90px",
              height: "90px",
              right: "40px",
              top: "30px",
            }}
          >
            <h3 className="m-0 fw-bold">30%</h3>
            <small>OFF</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
