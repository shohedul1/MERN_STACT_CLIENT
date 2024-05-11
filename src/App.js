import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Settings from "./pages/settings/Settings";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login";
import Topbar from "./components/topbar/Topbar";
import Register from "./pages/register/Register";
import Single from "./pages/single/Single";
import Home from "./pages/home/Home"
import { useContext } from "react";
import { Context } from "./context/Context";


function App() {
  const {user} = useContext(Context)
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />}/>
        <Route path="/settings" element= {user ? <Settings /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;

