import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="auth">
      <h1 className="">Login</h1>
      <form action="">
        <input required type="text" placeholder="username" />
        <input required type="password" placeholder="password" />
        <button>Login</button>
        <p>This is an error!</p>
        <span>
          Don't you have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
