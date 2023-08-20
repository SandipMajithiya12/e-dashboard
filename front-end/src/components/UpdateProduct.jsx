import { useEffect, useState } from "react"
import { useParams ,useNavigate} from "react-router-dom";


const UpdateProduct = () => {
    const [name,setName] = useState('');
    const [company,setCompany] = useState('');
    const [price,setPrice] = useState('');
    const [category,setCategory] = useState('');
   
    const params = useParams();
    const usenav = useNavigate();
   useEffect(( )=>{
    getProduct();
   },[])
    
    const getProduct = async()=>{
        console.log(params);
        let result = await fetch(`http://localhost:5000/product/${params.id}`)
        result = await result.json();
        setName(result.name);
        setCompany(result.company);
        setPrice(result.price)
        setCategory(result.category);
    }



    const UpdateProcduct =async ()=>{
    
      let result = await fetch(`http://localhost:5000/product/${params.id}`,{
        method : 'Put',
        body : JSON.stringify({name,price,company,category}),
        headers :{
          'content-Type' :"application/json"
        }
      });
      
      result = await result.json();
      console.log(result);
      usenav('/')
    }
  return (
    <div>
     <div className="register">
      <div className="cart cartaddproduct">
        <h1>Update Products</h1>
        <input
          type="text"
          placeholder="Enter Product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Product company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
       
        <input
          type="text"
          placeholder="Enter Product Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
     
        <input
          type="text"
          placeholder="Enter Product category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
       

        <button onClick={UpdateProcduct}>Submit</button>
      </div>
    </div>
    </div>
  )
}

export default UpdateProduct
