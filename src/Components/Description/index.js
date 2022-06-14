import React from "react";
import "./description.css";

export default function Description(props) {
  return (
    <div className="details">
      <img src="/images/MapIcon.jpg" alt="mapIcon" className="mapIcon" />
      <span className="location">{props.location} </span>
      <a href={props.googleMapsUrl} target="_blank" className="mapLink">
        View On Google Maps
      </a>
      <h1 className="title">{props.title}</h1>
      <span className="dates">{props.startdate} - </span>
      <span className="dates">{props.enddate}</span>
      <p className="info">{props.info}</p>
    </div>
  );
}
