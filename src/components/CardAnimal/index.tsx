import React from "react";
import Flag from "../Flag";
import "./styles.css";

type CardProps = {
  animalImage: string;
  animalType: string;
  animalName: string;
  color: string;
  breed: string;
};

export default function CardAnimal({
  animalImage,
  animalName,
  animalType,
  breed,
  color,
}: CardProps) {
  return (
    <div className="card">
      <img src={animalImage} alt="" />
      <div className="info-animal-box">
        <div className="content">
          <p className="type">{animalType}</p>
          <p className="name">NAME:{animalName}</p>
        </div>
        <img src="../../../public/svg/Dog/dog.svg" alt="" />
      </div>
      <div className="flags">
        <Flag color={color} text="PRETO" />
        <Flag color="#001AFF" text={breed} />
      </div>
    </div>
  );
}
