import { useState } from "react"


const AddProduct = () => {
    const [name,setName] = useState('');
    const [company,setCompany] = useState('');
    const [price,setPrice] = useState('');
    const [category,setCategory] = useState('');
    const [error,setError] = useState('');
    const addProcduct =async ()=>{

      if(!name || !company || !price || !category){
        setError(true);
        return false;
      }
        console.log(name,company,price,category)
        const user_id = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch("http://127.0.0.1:5000/add-product", {
            method: "post",
            body: JSON.stringify({ name, company,price,category,user_id}),
            headers: {
              "Content-Type": "application/json",
            },
          });
          result = await result.json();
          console.log(result);
         if(result)
         {
          alert('Product Are Added Sucessfully')
         }
         window.location.reload(false)


         
    }
  return (
    <div>
     <div className="register">
      <div className="cart cartaddproduct">
        <h1>Add Products</h1>
        <input
          type="text"
          placeholder="Enter Product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
  {error && !name && <span className="invalid_error">Enter valid name</span>}
        <input
          type="text"
          placeholder="Enter Product company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
         {error && !company && <span className="invalid_error">Enter valid name</span>}
        <input
          type="text"
          placeholder="Enter Product Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
         {error &&!price && <span className="invalid_error">Enter valid name</span>}
        <input
          type="text"
          placeholder="Enter Product category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
         {error && !category && <span className="invalid_error">Enter valid name</span>}

        <button onClick={addProcduct}>Submit</button>
      </div>
    </div>
    </div>
  )
}

export default AddProduct
