import React from "react";
import "./App.css";
import data from "./data";
import Description from "./Components/Description";
import NavBar from "./Components/NavBar";
import Pictures from "./Components/Pictures";

function App() {
  return (
    <div className="app-container">
      <NavBar />

      <div className="card">
        {data.map((pic) => {
          return <Pictures img={pic.imageUrl} />;
        })}
        {data.map((content) => {
          return (
            <Description
              location={content.location}
              googleMapUrl={content.googleMapsUrl}
              title={content.title}
              startdate={content.startDate}
              enddate={content.endDate}
              info={content.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
