import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setMail] = useState("");
  const [pwd, setPwd] = useState("");
  const [error,setError] = useState('');
  const usenav = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      usenav("/");
    }
  },[]);

  const collectdata = async () => {
    if(!name || !email || !pwd){
      setError(true);
      return false;
    }
    console.log(name, email, pwd);
    let result = await fetch("http://127.0.0.1:5000/register", {
      method: "post",
      body: JSON.stringify({ name, email, pwd }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    localStorage.setItem("user", JSON.stringify(result.result));
    localStorage.setItem("token", JSON.stringify(result.auth));
    if (result) {
      usenav("/");
    }
  };
  return (
    <div className="register">
      <div className="cart">
        <h1>Register</h1>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
         {error && !name && <span className="invalid_error">Enter  name</span>}
        <input
          type="email"
          placeholder="Enter mail"
          value={email}
          onChange={(e) => setMail(e.target.value)}
        />
         {error && !email && <span className="invalid_error">Enter email</span>}
        <input
          type="password"
          placeholder="Enter Password"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        />
         {error && !pwd && <span className="invalid_error">Enter Password</span>}

        <button onClick={collectdata}>signup</button>
      </div>
    </div>
  );
};

export default Signup;
