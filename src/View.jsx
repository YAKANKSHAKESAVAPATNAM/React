import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function View({ dataList }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);


  const filteredData = dataList.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="view-container">
      <h1>View Data</h1>
      <Link to="/Form1" className="back-link">
        Back to Form
      </Link>

      <input
        type="text"
        placeholder="Search by product name or brand..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />


      <div className="product-list">
        {filteredData.length === 0 ? (
          <p>No data available</p>
        ) : (
          filteredData.map((item, index) => (
            <div
              className="product-card"
              key={index}
              onClick={() => setSelectedItem(item)} 
            >
              <h3>{item.name}</h3>
              <p>Brand: {item.brand}</p>
              <p>Size: {item.size}</p>
              <p>Price: {item.price}</p>
              {item.image && (
                <img src={item.image} alt={item.name} width="100" />
              )}
            </div>
          ))
        )}
      </div>

      {selectedItem && (
        <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} 
          >
            <button className="close-btn" onClick={() => setSelectedItem(null)}>
              ✖
            </button>
            <h2>{selectedItem.name}</h2>
            <p><strong>Brand:</strong> {selectedItem.brand}</p>
            <p><strong>Size:</strong> {selectedItem.size}</p>
            <p><strong>Price:</strong> {selectedItem.price}</p>
            {selectedItem.description && (
              <p><strong>Description:</strong> {selectedItem.description}</p>
            )}
            {selectedItem.image && (
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                style={{ width: "200px", marginTop: "10px" }}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default View;
