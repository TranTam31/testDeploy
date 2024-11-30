import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import About from "./pages/About";
import { useSelector } from "react-redux";

function App() {
  const token = useSelector((state) => state.auth.token)
  return (
    <Router>
      <Routes>
        <Route path="/" element={token ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={token ? <About /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
