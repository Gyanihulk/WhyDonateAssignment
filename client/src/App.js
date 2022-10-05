import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import Login from "./pages/login/Login";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import './base.scss'
function App() {
  const ProtectedRoute = ({ children }) => {
    let token=localStorage.getItem("token")
console.log(token)
    if (!token) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <>
      {/* Routes */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/Search"
            element={
              <ProtectedRoute>
                <Search />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
