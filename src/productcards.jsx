import React from "react";
import IMG from "./assets/react.svg";
import './Product.css';
function ProductCards() {
    const Data = [
        { ID :'1',Image: IMG, Price: 1100, Brand: "FaceWash" , Description: "Dummy Info about Facewash"},
    { ID :'2',Image: IMG, Price: 1200, Brand: "Shampoo",Description: "Dummy Info about shampoo" },
    { ID :'3',Image: IMG, Price: 1300, Brand: "Accessories",Description: "Dummy Info about Accessories" }

    ]
    return(
        <div className="parent">
            {
                Data.map(ele =>
                {
                    return(
                        <div className="card" onClick={() => window.location.href = `./product-info/${ele.ID}`}>
                           <div className="image-section">
                             <img src={ele.Image} />
                           </div>
                          <div className="info-section">
                            <div className="brand">Brand: {ele.Brand}</div>
                            <div className="price">Price: {ele.Price}</div>
                          </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default ProductCards;
