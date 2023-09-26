import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";
const Products = () => {
  const [products, setProducts] = React.useState([]);
  const [loader, setLoader] = useState(true);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts([...data]);
      setLoader(false);
    };
    fetchProducts();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };
  if (loader) return <p>loading.....</p>;
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        justifyContent: "center"
      }}
    >
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <div className="img-container">
            <img src={product.image} style={{ height: "80px" }} alt="" />
          </div>

          <h4>{product.title}</h4>
          <h3 style={{ textAlign: "center" }}>{product.price}$</h3>
          <div className="btn">
            <button onClick={() => handleAdd(product)}>Add Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Products;
