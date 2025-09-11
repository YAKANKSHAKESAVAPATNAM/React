import React from "react";
import myimage from "./assets/react.svg";
import "./FunctionComponent.css";

const FunctionComponent = () => {
  var mycard = [
    {
      image: myimage,
      price: 1200,
      brand: "Aditya"
    },
    {
      image: myimage,
      price: 1300,
      brand: "Nike"
    },
    {
      image: myimage,   
      price: 1400,
      brand: "Puma"
    },
    {
      image: myimage,   
      price: 1500,
      brand: "Reebok"
    },
    {
      image: myimage,   
      price: 1500,
      brand: "Reebok"
    },
    {
      image: myimage,   
      price: 1500,
      brand: "Reebok"
    },
    {
      image: myimage,   
      price: 1500,
      brand: "Reebok"
    },
    {
      image: myimage,   
      price: 1500,
      brand: "Reebok"
    },
    {
      image: myimage,   
      price: 1500,
      brand: "Reebok"
    },
    {
      image: myimage,   
      price: 1500,
      brand: "Reebok"
    },
    {
      image: myimage,   
      price: 1500,
      brand: "Reebok"
    },
    {
      image: myimage,   
      price: 1500,
      brand: "Reebok"
    },
    {
      image: myimage,   
      price: 1500,
      brand: "Reebok"
    },
    {
      image: myimage,   
      price: 1500,
      brand: "Reebok"
    },
    {
      image: myimage,   
      price: 1500,
      brand: "Reebok"
    }
  ];

  return (
    <>
    <h1>POPULAR GIFT COLLECTION</h1>
      <div className="parent">
        {mycard.map((ele, index) => (
          <div className="card" key={index}>
            <div className="image">
              <img src={ele.image}/>
              
            </div>
            <div className="info">
              <div className="price">{ele.price}/-</div>
              <div className="brand">{ele.brand}</div>
              <div className="cart">🛒ADD TO CART</div>
            </div>
            
          </div>
        ))}
      </div>
    </>
  );
};

export default FunctionComponent;
