import React from "react";
import "./pictures.css";
import Description from "../Description";

export default function Pictures(props) {
  return (
    <section className="picture">
      <img src={props.img} alt="MtFuji" className="pic-style" />
      <Description
        location={props.location}
        googleMapUrl={props.googleMapUrl}
        title={props.title}
        startDate={props.startDate}
        endDate={props.endDate}
        info={props.info}
      />
    </section>
  );
}
