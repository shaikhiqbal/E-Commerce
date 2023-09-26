import { useSelector, useDispatch } from "react-redux";
import { Trash } from "react-feather";
import { remove } from "../store/cartSlice";
const Cart = () => {
  const selectedProduct = useSelector((state) => state.cart);
  const removed = useDispatch();
  const handleRemove = () => removed(remove);
  return (
    <div>
      <h1>Selected Product</h1>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          justifyContent: "center",
          marginTop: "3rem"
        }}
      >
        {selectedProduct &&
          selectedProduct.map((product) => (
            <div key={product.id} className="product-card">
              <div
                style={{
                  display: "flex",
                  justifyContent: "end",
                  color: "#DB2E2E"
                }}
              >
                <Trash
                  onClick={handleRemove}
                  style={{ cursor: "pointer" }}
                  size={14}
                />
              </div>
              <div className="img-container">
                <img src={product.image} style={{ height: "80px" }} alt="" />
              </div>

              <h4>{product.title}</h4>
              <h3 style={{ textAlign: "center" }}>{product.price}$</h3>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Cart;
