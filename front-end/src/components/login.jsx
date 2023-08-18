import { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const usenav = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem("user");
        if (auth) {
          usenav("/");
        }
      },[]);
    

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
    
    if (result.name) {
        localStorage.setItem("user", JSON.stringify(result));
      usenav("/");
    }
    else
    {
        alert("Plz enter vaild detail")
    }
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
        <input
          type="password"
          placeholder="Enter Password"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        />
    <button onClick={handlelogin}>Login</button>
        
      </div>
    </div>
  )
}

export default Login
