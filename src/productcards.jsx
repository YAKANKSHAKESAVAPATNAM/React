import React from "react";
import hair1 from "./assets/hair1.png";
import hair2 from "./assets/hair2.png";
import hair3 from "./assets/hair3.png";
function ProductCards() {
    const Data=[
        {
        'ID':"1",
        'Name':"React",
        'Version':"18.2.0",
        'Author':"Meta"
        },
        {
        'ID':"2",
        'Name':"Vite",
        'Version':"4.3.9",
        'Author':"Evan You"
        },
        {
        'ID':"3",
        'Name':"Vue",
        'Version':"3.2.47",
        'Author':"Evan You"
        }
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
    );
}

export default ProductCards;
