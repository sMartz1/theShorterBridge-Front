import React from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
export default function Header() {
  const navigate = useNavigate();
  const login = () => {
    navigate("/login");
  };

  const pathname = window.location.pathname;
  console.log(pathname)

  return (
    <header>
      <div className="header-menu">
        {pathname == "/" ? <IconButton aria-label="Login" onClick={login}>
          <AccountCircleIcon fontSize="large" />
        </IconButton>:""}
        
      </div>
    </header>
  );
}
