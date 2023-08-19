import { useEffect, useState } from "react";
const Products_list = () => {
  useEffect(() => {
    getProduct();
  }, []);
  const [products, setProducts] = useState([]);
  const getProduct = async () => {
    let result = await fetch("http://localhost:5000/products");
    result = await result.json();
    setProducts(result);
  };
  console.log("products", products);
  
  return <div className="product_list">
        <ul>
          <li>S.no</li>
          <li>name</li>
          <li>price</li>
          <li>category</li>
        </ul>
       {
        products.map((item,index)=>
        <ul>
        <li>{index+1}</li>
        <li>{item.name}</li>
        <li>{item.price}</li>
        <li>{item.category}</li>
        </ul>
      )
       }
  </div>
};

export default Products_list;
