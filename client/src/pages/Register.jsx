import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // npm i axios
const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   const res = await axios.post("")
  // };
  return (
    <div className="auth">
      <h1 className="">Register</h1>
      <form action="">
        <input
          required
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
        <input
          required
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        {/* <button onClick={handleSubmit}>Register</button> */}
        <p>This is an error!</p>
        <span>
          Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
