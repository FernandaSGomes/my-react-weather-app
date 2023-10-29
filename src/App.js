import React from "react";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/fernanda-gomes-front-end-developer/"
            target="_blank"
            rel="noreferrer"
          >
            Fernanda Gomes
          </a>{" "}
          and is open-source on{" "}
          <a
            href="https://github.com/FernandaSGomes/my-react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
