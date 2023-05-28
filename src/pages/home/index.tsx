import React from "react";
import "./styles.css";
import Header from "../../components/Header";
import Flag from "../../components/Flag";
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
            animalImage="../../../public/assets/Animal1.png"
            animalName="THOR"
            animalType="DOG"
            breed="PITBULL"
            color="#000"
          />

          <CardAnimal
            animalImage="../../../public/assets/Animal1.png"
            animalName="THOR"
            animalType="DOG"
            breed="PITBULL"
            color="#000"
          />
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
