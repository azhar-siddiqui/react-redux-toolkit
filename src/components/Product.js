import React, { useState, useEffect } from "react";

const Product = () => {
  const [product, setproduct] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(`https://fakestoreapi.com/products`);
      const data = await res.json();
      // console.log(data);
      setproduct(data);
    };
    fetchProducts();
  }, []);
  return (
    <div>
      <h2 className="text-center">Product</h2>
      <hr />
      <div className="product-wraper container-fluid d-flex justify-content-evenly flex-wrap rounded">
        {product.map((product) => {
          return (
            <div
              className="card my-3"
              style={{ width: "20rem" }}
              key={product.id}
            >
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
              />
              <div className="card-body d-flex flex-column align-items-center justify-content-evenly">
                <small className="card-title d-flex align-stretch">
                  {product.title}
                </small>
                <h5 className="card-text">$ {product.price}</h5>
                <button className="btn btn-primary">Add To Cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
