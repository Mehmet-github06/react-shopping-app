import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ProductForm from "../components/ProductForm";

const UpdateProduct = () => {
  const { state } = useLocation();
  console.log(state);
  const { title } = useParams();
  console.log(title);
  const navigate = useNavigate();
  const [formData, setFormData] = useState(state); 

  const handleChange = e => {
  

    setFormData({ ...formData, [e.target.id]: e.target.value });
  };



  const handleSubmit = async e => {
    e.preventDefault();
    
    await axios.put(
    `https://65626687ee04015769a664b1.mockapi.io/furkans/${state.id}`,
      formData
    ); 
    navigate(-1); 
  };
  return (
    <div className="container">
      <ProductForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        text="Update"
      />
    </div>
  );
};

export default UpdateProduct;
