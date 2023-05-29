import React from "react";
import "./styles.css";
import Header from "../../components/Header";
import CardAnimal from "../../components/CardAnimal";
import Quote from "../../../public/svg/Quote";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <section className="section-1">
        <div className="content-box">
          <h1>Cuidaremos de seu PET da forma que ele merece</h1>
          <p>
            Traga aqui seu animal para passar um dia em nosso SPA de PETS, onde
            terá uma experiencia incrível.
          </p>
          <button className="schedule-button">Agende já</button>
        </div>
        <div className="background-box">
          <div className="background">
            <div className="blur"></div>
            <img src="../../../public/assets/dog.png" alt="" />
          </div>
        </div>
      </section>

      <section className="section-2">
        <div className="title">
          <p>
            Nossos Serviços
          </p>
        </div>
        <div className="container-services">
          <div className="logo-banho">
            <img src="../../../public/svg/pet.svg" alt="" />
            <div className="banho-description">
              <p>
                Banho & Tosa
              </p>
              <p>
                Muito importante para a saúde e higiene de seu animal.
              </p>
            </div>
          </div>
          <div className="logo-spa">
            <img src="../../../public/svg/spa.svg" alt="" />
            <div className="spa-description">
              <p>
                Spa
              </p>
              <p>
                Traga seu animal para ter uma experiência incrível
              </p>
            </div>
          </div>
          <div className="logo-veterinario">
            <img src="../../../public/svg/veterinario.svg" alt="" />
            <div className="veterinario-description">
              <p>
                Serviços Veterinários
              </p>
              <p>
                Vacinação, cirurgias e diversos procedimentos de tratamento do animal
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-3">
        <h1>Últimos Clientes</h1>
        <div className="card-list">
          <CardAnimal
            animalImage="../../../public/assets/Animal1.png"
            animalName="THOR"
            animalType="DOG"
            breed="PITBULL"
            color="#000"
          />

          <CardAnimal
            animalImage="../../../public/assets/Animal2.png"
            animalName="ZEUS"
            animalType="DOG"
            breed="ROTTWEILER"
            color="#000"
          />

          <CardAnimal
            animalImage="../../../public/assets/Animal3.png"
            animalName="AQUILES"
            animalType="DOG"
            breed="BULDOGUE"
            color="#000"
          />
        </div>
      </section>
      <section className="section-4">
        <div className="container-contato">
          <img src="../../../public/svg/DogTelefone.svg" alt="" />
          <div className="title-contato">
            <p>
              Entre em contato conosco para mais informações
            </p>
          </div>
          <div className="box-redes-sociais">

          </div>
        </div>

      </section>
      <section className="section-5">
        <div className="opacity"></div>
        <div className="content">
          <Quote />
          <p>Um mundo de cuidados e mimos para o seu melhor amigo.</p>
        </div>
      </section>
    </div>
  );
}
