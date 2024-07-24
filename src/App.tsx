import { useState } from "react";
import "./App.css";
import SideBar from "./components/sideBar/SideBar";
import Chat from "./pages/chat/Chat";
import { History } from "./pages/history/History";
import { Home } from "./pages/home/Home";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || false);
  const location = useLocation();

  const showSideBar: boolean = ["/login", "/signup"].includes(
    location.pathname
  );

  return (
 <>
   <div className="fixed top-0 z-[-2] h-screen w-full  bg-slate-50 bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,105,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)] "/>

    <div
      className={`  ${!showSideBar ? `flex min-h-screen`: " "}`}
    >
      {!showSideBar && <SideBar />}
      <Routes>
        <Route
          path="/login"
          element={!token ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/signup"
          element={!token ? <Signup /> : <Navigate to="/" />}
        />
        <Route
          path="/chat/"
          element={token ? <Chat /> : <Navigate to="/login" />}
        />
        <Route path="/" element={token ? <Home /> : <Navigate to="/login" />} />
        <Route
          path="/history"
          element={token ? <History /> : <Navigate to="/login" />}
        />
      </Routes>
    </div>
 </>
  );
}

export default App;
