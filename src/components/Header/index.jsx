import React, { useEffect } from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from "@mui/material/IconButton";
import { useAuth } from "../../context/authContext";
export default function Header() {
  const navigate = useNavigate();
  const {user,signout} = useAuth();
  const login = () => {
    user === null ?   navigate("/login"): navigate("/my-links")
  };
  const logout = async() => {
    await signout();
  };
  const pathname = window.location.pathname;
  console.log(pathname)
  const loginButton =  (<IconButton aria-label="Login" onClick={login}>
    <AccountCircleIcon fontSize="large" />
    </IconButton>)
    const logoutButton = (<IconButton aria-label="Logout" onClick={logout}>
    <LogoutIcon />
    </IconButton>)
  return (
    <header>
      <div className="header-menu">
        {user !== null ? (<h5>{user?.displayName}</h5>) : ""}
        {pathname == "/" ? loginButton :""}
        {pathname == "/my-links" ? logoutButton : "" }
      </div>
    </header>
  );
}
