import React, { useState } from "react";
import ProductForm from "../components/ProductForm";
import axios from "axios";

const initialState = {
  name: "",
  image: "",
  price: 0,
  dampingRate: 0.8,
  amount: 0,
};

const NewProduct = () => {
  const [formData, setFormData] = useState(initialState); // initialStatei apinin benden istediği değerlere göre oluşturdum ki herhangi bir ek düzenleme yapmadan veriyi olduğu gibi apiye gönderebileyim.

  const handleChange = e => {
    console.log(e.target);
    console.log(e.target.id);

    setFormData({ ...formData, [e.target.id]: e.target.value }); //change eventının gerçekleştiği inputtaki id attribute u ile formDatamdaki key değerlerim aynı olduğu için dinamik bir şekilde formData mı güncelleybiliyorum
    //console.log(formData); // setter metodu asenkron çalışır.
  };

  // console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    await axios.post(
      "https://63f4e5583f99f5855db9e941.mockapi.io/products",
      formData
    );
    // setName("")
    // setPrice("")
    // setImage("")
    setFormData(initialState);
  };
  return <div className="container">
    <ProductForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} text="New" />
  </div>;
};

export default NewProduct;
