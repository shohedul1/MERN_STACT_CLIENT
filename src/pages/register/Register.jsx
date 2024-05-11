import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        username,
        email,
        password,
      });
      if (res.data) {
        window.location.replace("/login")
      }
      console.log(res);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-transparent to-transparent bg-cover" style={{ backgroundImage: "url('https://images.pexels.com/photos/768473/pexels-photo-768473.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')" }}>
      <span className="text-6xl font-bold">Register</span>
      <form className="mt-5 flex flex-col" onSubmit={handleSubmit}> {/* Change onClick to onSubmit */}
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="loginInput"
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="loginInput"
          required
        />
        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter your password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="loginInput"
        />
        <button className="loginButton" type="submit">Register</button>
        <button className="loginRegisterButton">
          <Link to={'/login'}>
            Login
          </Link>
        </button>
      </form>
      {error && <span className="text-red-500">Something went worng!</span>}
    </div>
  );
};
