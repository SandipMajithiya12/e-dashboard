import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setMail] = useState("");
  const [pwd, setPwd] = useState("");
  const usenav = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      usenav("/");
    }
  },[]);

  const collectdata = async () => {
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
    localStorage.setItem("user", JSON.stringify(result));
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

        <button onClick={collectdata}>signup</button>
      </div>
    </div>
  );
};

export default Signup;
