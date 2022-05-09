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
  return (
    <header>
      <div className="header-menu">
        <IconButton touch={true} aria-label="Login" onClick={login} onDoubleClick={login}>
          <AccountCircleIcon fontSize="large" />
        </IconButton>
      </div>
    </header>
  );
}
