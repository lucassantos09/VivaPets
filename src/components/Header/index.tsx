import React from "react";
import "./styles.css";
import Logo from "../../../public/svg/Logo/logo";
import Login from "../../../public/svg/Login/login";

export default function Header() {
  return (
    <header className="header">
      <div className="logo-box">
        <p>
          Viva<span>Pets</span>.
        </p>
        <Logo />
      </div>
      <nav>
        <button className="login-button">
          Login
          <Login />
        </button>
      </nav>
    </header>
  );
}
