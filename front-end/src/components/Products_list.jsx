import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Products_list = () => {
  useEffect(() => {
    getProduct();
  }, []);
  const [products, setProducts] = useState([]);
  const getProduct = async () => {
    let result = await fetch("http://localhost:5000/products",{
      headers : {
        authorization : `bearer ${JSON.parse(localStorage.getItem('token'))}`
      }
    });
    result = await result.json();
    setProducts(result);
  };
  console.log("products", products);

  const deleproduct = async(id)=>{
   let result = await fetch(`http://localhost:5000/product/${id}`,{
    method : 'delete',
    headers : {
      authorization : `bearer ${JSON.parse(localStorage.getItem('token'))}`
    }
   });
   result = await result.json();
   if(result){
    getProduct();
   }
  }
  const searchHandle = async ()=>{
    let key = event.target.value;
    if(key){
    let result = await fetch(`http://localhost:5000/search/${key}`,{
      headers : {
        authorization : `bearer ${JSON.parse(localStorage.getItem('token'))}`
      }
    });
    result = await result.json();
    if(result){
      setProducts(result);
    }
    }
    else{
      getProduct();
    }

  }


  return (
    <div className="product_list">
      <h1>Product-list</h1>
      <input type="text" placeholder="Search Product" className="serachbox" onChange={searchHandle}/>
      <ul>
        <li>S.no</li>
        <li>name</li>
        <li>company</li>
        <li>price</li>
        <li>category</li>
        <li>Delete</li>
        <li>Update</li>
      </ul>
      {
       products.length>0 ?products.map((item,index)=>
        <ul key={item._id}>
        <li>{index+1}</li>
        <li>{item.name}</li>
        <li>{item.company}</li>
        <li>{item.price}</li>
        <li>{item.category}</li>
        <li><button className="deletebtn" onClick={()=>deleproduct(item._id)}>Delete</button></li>
        <li><button className="deletebtn btn"><Link to={"/update/"+item._id}>Update</Link></button></li>
      </ul>
        ):
        <h2>No data Found</h2>
      }
    </div>
  )
};

export default Products_list;
