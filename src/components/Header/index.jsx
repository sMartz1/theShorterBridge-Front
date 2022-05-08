import React from "react";
import "./index.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
export default function Header() {
  const login = () => {
    console.log("Login");
  };
  return (
    <header>
      <div className="header-menu">
        <IconButton aria-label="Login" onClick={login}>
          <AccountCircleIcon fontSize="large" />
        </IconButton>
      </div>
    </header>
  );
}
