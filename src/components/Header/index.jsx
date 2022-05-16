import React, { useEffect, useState } from "react";
import "./index.scss";
import { useNavigate, Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from "@mui/material/IconButton";
import { useAuth } from "../../context/authContext";
export default function Header() {
  const navigate = useNavigate();
  const {user,signout} = useAuth();
  const [isLogged,setIsLogged] = useState(false);

  useEffect(() => {
    const log = user === null ? false : true;
    setIsLogged(log);
  }, [user]);

  const login = () => {
    user === null ?   navigate("/login"): navigate("/my-links")
  };
  const logout = async() => {
    await signout();
  };

  const loginButton =  (<IconButton aria-label="Login" onClick={login}>
    <AccountCircleIcon fontSize="large" />
    </IconButton>)
    const logoutButton = (<div className="logut-button"onClick={logout}>
      Logut
    <LogoutIcon />
    </div>)
  return (
    <header>
      <div className="header-menu">
        {isLogged ? (<><p className="header-mail">{user?.email}</p> <Link className="link-header" to={'/my-links'}><p >Mis links</p></Link></>) : <Link className="link-header" to={'/'}><p>Home</p></Link>}
        {isLogged ? logoutButton : loginButton}
      </div>
    </header>
  );
}
