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

  const deleproduct = async(id)=>{
   let result = await fetch(`http://localhost:5000/product/${id}`,{
    method : 'delete'
   });
   result = await result.json();
   if(result){
    getProduct();
   }
  }


  return (
    <div className="product_list">
      <h1>Product-list</h1>
      <ul>
        <li>S.no</li>
        <li>name</li>
        <li>price</li>
        <li>category</li>
        <li >Operation</li>
      </ul>
      {
        products.map((item,index)=>
        <ul key={item._id}>
        <li>{index+1}</li>
        <li>{item.name}</li>
        <li>{item.price}</li>
        <li>{item.category}</li>
        <li><button className="deletebtn" onClick={()=>deleproduct(item._id)}>Delete</button></li>
      </ul>
        )
      }
    </div>
  )
};

export default Products_list;
