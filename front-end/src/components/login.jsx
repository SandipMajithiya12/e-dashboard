import { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {eye} from 'react-icons-kit/feather/eye';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import { Icon } from "react-icons-kit";
const Login = () => {
    const usenav = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem("user");
        if (auth) {
          usenav("/");
        }
      },[]);
    const[type,setType] = useState('password');
    const [icon,setIcom]= useState(eyeOff);
    const [pwd, setPwd] = useState("");
  const [email, setMail] = useState("");
  const handlelogin =async ()=>{
    console.log(email,pwd);
    let result = await fetch("http://127.0.0.1:5000/login", {
      method: "post",
      body: JSON.stringify({ email, pwd }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    
    if (result.auth) {
        localStorage.setItem("user", JSON.stringify(result.user));
        localStorage.setItem("token", JSON.stringify(result.auth));
      usenav("/");
    }
    else
    {
        alert("Plz enter vaild detail")
    }
  }
  const handletoggle=()=>
  {
      if(type === 'password')
      {
        setIcom(eye);
        setType('text');
      }
      else
      {
        setIcom(eyeOff);
        setType('password');
      }
      console.log("sucses")
  }
 
 
  return (
    <div className="register">
      <div className="cart cart1">
        
        <h1>Login</h1>

        <input
          type="email"
          placeholder="Enter mail"
          value={email}
          onChange={(e) => setMail(e.target.value)}
        />
        <div className="pwdmanage">
        <input className="icon"
          type={type}
          placeholder="Enter Password"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        />
      <span onClick={handletoggle}>  <Icon size={20} icon={icon}></Icon></span>
      </div>
      
      
    <button onClick={handlelogin}>Login</button>
        
      </div>
    </div>
  )
}

export default Login
