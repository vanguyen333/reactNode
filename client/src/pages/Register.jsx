import { useState } from "react";
import { Link } from "react-router-dom";
// import axios from "axios"; // npm i axios
const Register = () => {
  return (
    <div className="auth">
      <h1 className="">Register</h1>
      <form action="">
        <input required type="text" placeholder="username" />
        <input required type="email" placeholder="email" />
        <input required type="password" placeholder="password" />
        <button>Register</button>

        <p>This is an error!</p>
        <span>
          Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
