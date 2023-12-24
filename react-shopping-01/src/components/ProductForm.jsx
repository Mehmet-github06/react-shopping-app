// import { useState } from "react";

// const initialState = {
//   name: "",
//   image: "",
//   price: 0,
//   dampingRate: 0.8,
//   amount: 0,
// };

const ProductForm = ({formData,handleChange,handleSubmit,text}) => {
  // const [name,setName] = useState("")
  // const [image,setImage] = useState("")
  // const [price,setPrice] = useState("")
  //! statleri ve fonksiyonları üst componente taşıdık.
  // const [formData, setFormData] = useState(initialState); // initialStatei apinin benden istediği değerlere göre oluşturdum ki herhangi bir ek düzenleme yapmadan veriyi olduğu gibi apiye gönderebileyim.

  // const handleChange = e => {
  //   console.log(e.target);
  //   console.log(e.target.id);

  //   setFormData({ ...formData, [e.target.id]: e.target.value }); //change eventının gerçekleştiği inputtaki id attribute u ile formDatamdaki key değerlerim aynı olduğu için dinamik bir şekilde formData mı güncelleybiliyorum
  //   //console.log(formData); // setter metodu asenkron çalışır.
  // };

  // // console.log(formData);

  // const handleSubmit = (e) =>{
  //   e.preventDefault()
  //   console.log(formData);
  //   // setName("")
  //   // setPrice("")
  //   // setImage("")
  //   setFormData(initialState)
  // }

  return (
    <article
      id="add-product"
      className="mb-4 mt-4 col col-lg-6 mx-auto border rounded-2 bg-opacity-50 bg-light">
      <h1 className="text-center">{text} Product</h1>
      <form className="p-2" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="add-name" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={formData.name}
            // onChange={(e)=> setFormData({...formData,name:e.target.value})}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="add-price" className="form-label">
            Product Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="add-quantity" className="form-label">
            Product Quantity
          </label>
          <input
            type="number"
            className="form-control"
            id="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>
        <label htmlFor="add-image" className="form-label">
          Product Image
        </label>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">
            https://example.com/
          </span>
          <input
            type="url"
            className="form-control"
            id="image"
            value={formData.image}
            onChange={handleChange}
            aria-describedby="basic-addon3"
            required
          />
        </div>
        <div className="text-center">
          <button type="submit" className="add-to-cart btn btn-success btn-sm">
            <i className="fa-solid fa-cart-plus me-2"></i>Save To {text} Product
          </button>
        </div>
      </form>
    </article>
  );
};

export default ProductForm;
