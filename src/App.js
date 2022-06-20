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

      <div>
        {data.map((content) => {
          return (
            <Pictures
              img={content.imageUrl}
              location={content.location}
              googleMapUrl={content.googleMapsUrl}
              title={content.title}
              startDate={content.startDate}
              endDate={content.endDate}
              info={content.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
