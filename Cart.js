import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 746509, name: "Comfortable Sofa", price: 64999, quantity: 1, imageUrl: img1},
    { id: 976543, name: "Comfortable Sofa", price: 74999, quantity: 1, imageUrl: img2},
    { id: 234567, name: "Comfortable Sofa", price: 54999, quantity: 1, imageUrl: img3},
  ]);
  
  
  const incrementQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Add to Cart</h1>
      <div className="row">
        
        <div className="col-md-8">
          {cartItems.map((item) => (
            <div key={item.id} className="d-flex align-items-center mb-4 p-3 border-bottom">
              <div className="me-3">
                <img 
                  src={item.imageUrl} 
                  alt={item.name} 
                  style={{ width: "188px", height: "188px", objectFit: "cover" }} 
                />
              </div>
              <div className="flex-grow-1">
                <h5 className="mb-1">{item.name}</h5>
                <p className="mb-0 text-muted">#{item.id}</p>
              </div>

              
              <div className="d-flex align-items-center" 
                style={{
                  border: "1px solid #ddd", 
                  borderRadius: "10px", 
                  padding: "2px 12px", 
                  backgroundColor: "#D3E1DC"
                }}>
                <button className="btn btn-sm" onClick={() => decrementQuantity(item.id)}> - </button>
                <span className="mx-3"> {item.quantity}</span>
                <button className="btn btn-light btn-sm" onClick={() => incrementQuantity(item.id)} 
                  style={{
                    width: "18px", 
                    height: "20px", 
                    borderRadius: "50%", 
                    padding: "0", 
                    textAlign: "center", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    backgroundColor: "#ffff", 
                    border: "1px solid #ddd"
                  }}
                > + </button>
              </div>

              <div className="mx-5"><strong>₹{item.price}</strong></div>
              <button className="btn btn-lg" onClick={() => removeItem(item.id)}> × </button>
              </div>
          ))}
        </div>

        
        <div className="col-md-4">
          <div style={{ textAlign: "center" }}>
            <img src={img1} alt="Cart Image" style={{  width: "100%",height: "700px", borderRadius: "10px" }}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;


