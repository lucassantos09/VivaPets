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
      <section className="section-2">
        <div className="title">
          <p>
            Nossos Serviços
          </p>
        </div>
        <div className="container-services">
          <div className="logo-banho">
            <p>
              Banho & Tosa 
            </p>
            <div className="banho-description">
            </div>
          </div>
          <div className="logo-spa">
            <p>
              Spa
            </p>
          </div>
          <div className="logo-veterinario">
            <p>
              Serviços Veterinários
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
