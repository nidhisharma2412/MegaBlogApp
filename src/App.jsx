import React,{ useState, useEffect } from "react";
import "./App.css";
import { Footer, Header } from "./components";
import conf from "./conf/conf";
import authService from "./appwrite/auth";
import { useDispatch } from "react-redux";
import { logout, login } from "./store/authSlice";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        console.log(userData)
        if (userData) {
          dispatch(login({userData}));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        {/* TODO: */}
        <Outlet/>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
