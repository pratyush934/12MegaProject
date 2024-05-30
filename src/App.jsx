import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  /* 
    loading important hai
  */

  const [loading, setLoading] = useState(true);
  /* 
    basically used for merging react with redux
    */
  const dispatch = useDispatch();

  useEffect(() => {
    /* 
      authservice se pucho ki tumhara current user kon hai
      */
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .catch((err) => console.log(err))
      .finally(setLoading(false));
  }, []);

  return !loading ? (
    <>
      <h1 className="text-yellow-200">
        <div className="w-full block">
          <Header />
          <Outlet/>
          <Footer />
        </div>
      </h1>
    </>
  ) : null;
}

export default App;
