
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import Header from "./Header";
function Form1({ dataList, setDataList }) {
  const [formData, setFormData] = useState({
    name: " ",
    brand: " ",
    size: " ",
    price: " ",
    image: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, image: URL.createObjectURL(files[0]) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.brand || !formData.price) {
      alert("Please fill all fields!");
      return;
    }
    setDataList([...dataList, formData]);
    setFormData({ name: "", brand: "", size: "", price: "", image: null });
    navigate("/View");
  };

  const handleReset = () => {
    setFormData({ name: "", brand: "", size: "", price: "", image: null });
  };

  return (
    <div className="form1">
      <h1 className="form1-title">Products-Info</h1>
      <Link to="/View">Go to View Data</Link>
      <form onSubmit={handleSubmit}>
        <br />
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter the product name"
        />
        <br />
        <br />
        <label>Brand: </label>
        <input
          type="text"
          name="brand"
          value={formData.brand}
          onChange={handleChange}
          placeholder="Enter the brand of product"
        />
        <br />
        <br />
        <label>Size: </label>
        <input
          type="number"
          name="size"
          value={formData.size}
          onChange={handleChange}
          placeholder="Enter size of the product"
        />
        <br />
        <br />
        <label>Price: </label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Enter the price of the product"
        />
        <br />
        <br />
        <label>Choose Image: </label>
        <input type="file" name="image" onChange={handleChange} />
        <br />
        <br />
        <button type="submit" onClick={() => alert("Form Submitted Successfully")}>Submit</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
    </div>
  );
}

export default Form1;
