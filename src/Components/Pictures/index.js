import React from "react";
import "./pictures.css";

export default function Pictures(props) {
  return (
    <section className="picture">
      <img src={props.img} alt="MtFuji" className="pic-style" />
    </section>
  );
}
