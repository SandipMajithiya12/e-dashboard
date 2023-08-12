import { useState } from "react"


const Signup = () => {
    const [name , setName] = useState("");
    const [mail , setMail] = useState("");
    const [pwd , setPwd] = useState("");
    const collectdata = ()=>{
        console.log(name,mail,pwd)
    }
  return (
    <div className="register">
    <div className="cart">
        <h1>Register</h1>
        <input type="text" placeholder="Enter name" value={name} onChange={(e) =>setName(e.target.value)} />
        <input type="text" placeholder="Enter mail" value={mail} onChange={(e) =>setMail(e.target.value)}/>
        <input type="text" placeholder="Enter Password" value={pwd} onChange={(e) =>setPwd(e.target.value)}/>

        <button onClick={collectdata}>signup</button>
    </div>

    
    </div>
  )
}

export default Signup
