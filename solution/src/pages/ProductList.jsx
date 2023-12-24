import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import CardTotal from "../components/CardTotal";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); //başlangıçta loading göstersin
  const [errorState, setErrorState] = useState(false); //errora düşerse error göstersin

  const getData = async () => {
    try {
      // const response = axios()
      // response.data

      const { data } = await axios(
        "https://63f4e5583f99f5855db9e941.mockapi.io/products"
      );
      console.log(data);
      setProducts(data);
      setErrorState(false); // işlem başarılı olursa erroru falsea çekiyorum
    } catch (error) {
      console.log(error);
      setErrorState(true); //catche düştüğünde errorstate ini true değerine
    } finally {
      setLoading(false); // işlem try a da catche de girse farketmez her türlü loadingi false çekiyoruz ki ne olduğunu kullancıya yansıtabilelim
    }
  };

  //componentDidMount
  useEffect(() => {
    //! Bu sayfa her render olduğunda useEffect çalışacak ve backende istek atacak.
    getData();
  }, []);

  if (errorState) {
    return <p>Something went wrong...</p>;
  }

  return (
    <div className="container mt-3">
      <div className={"d-sm-block d-md-flex"}>
        {loading ? (
          <p className="text-center text-danger w-100">Loading....</p>
        ) : products.length ? (
          <>
            <article id="product-panel" className="col-md-6">
              {products.map((product) => (
                <ProductCard key={product.id} getData={getData} {...product} />
              ))}
            </article>
            <article className="col-md-4 m-3">
              <CardTotal products={products} />
            </article>
          </>
        ) : (
          <p className="text-center text-danger w-100">No products data...</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
