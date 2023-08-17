import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './add.css'
const Add = () => {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [details, setDetails] = useState("");
    const [image, setImage] = useState("");
    const navigate = useNavigate();

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };

    const handleDetailsChange = (event) => {
        setDetails(event.target.value);
    };

    const handleImageChange = (event) => {
        setImage(event.target.value);
    };

    const handleClick = () => {
        axios.post("http://localhost:3001/api/ticket", {
            name:name,
            category:category,
            price:price,
            details:details,
            image:image,
        })
        .then(response => navigate('/'))
        .catch(error => console.log(error));
    };

    return (
        <div className="add-ticket">
        <h2>Add a New Ticket</h2>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" className="input-field" value={name} onChange={handleNameChange} />
    
        <label htmlFor="category">Category:</label>
        <input type="text" id="category" className="input-field" value={category} onChange={handleCategoryChange} />
    
        <label htmlFor="price">Price:</label>
        <input type="number" id="price" className="input-field" value={price} onChange={handlePriceChange} />
    
        <label htmlFor="details">Details:</label>
        <textarea id="details" className="textarea-field" value={details} onChange={handleDetailsChange}></textarea>
    
        <label htmlFor="image">Image URL:</label>
        <input type="text" id="image" className="input-field" value={image} onChange={handleImageChange} />
    
        <button className="add-button" onClick={handleClick}>Add Ticket</button>
    </div>
    
    );
};

export default Add;
