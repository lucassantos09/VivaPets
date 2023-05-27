import React from "react";
import "./styles.css";
import Logo from "../../../public/svg/logo";
import Login from "../../../public/svg/login";

export default function Home() {
  return (
    <div className="container">
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
      <section className="section-1"></section>
    </div>
  );
}
