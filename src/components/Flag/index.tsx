import React from "react";
import "./styles.css";

type Props = {
  text: string;
  color: string;
};

export default function Flag({ text, color }: Props) {
  return (
    <div className="container-flag">
      <div className="elipse" style={{ backgroundColor: color }}></div>
      <span>{text}</span>
    </div>
  );
}
