import { useContext, useRef } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { user, dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data }); // Verify res.data structure
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  console.log(user);
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-transparent to-transparent bg-cover" style={{ backgroundImage: "url('https://images.pexels.com/photos/768473/pexels-photo-768473.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')" }}>
      <span className="text-6xl font-bold">Login</span>
      <form className="mt-5 flex flex-col" onSubmit={handleSubmit}>
        <label>username</label>
        <input
          className="loginInput"
          type="text"
          ref={userRef}
          placeholder="Enter your email..." />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          ref={passwordRef}
          placeholder="Enter your password..." />
        <button className="loginButton hover:disabled:bg-red-400" type="submit" disabled={isFetching}>
          Login
        </button>
        <button className="loginRegisterButton">
          <Link to={'/register'}>
            Register
          </Link>
        </button>
      </form>


    </div>
  );
}