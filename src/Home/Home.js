import React from "react";
import { Link } from "react-router-dom";
import markers from "../STORE/images/unsplash-markers.jpg";
import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <h1>Welcome!</h1>
      <section className="Home__introduction">
        <p className="large">
          This is a sample project for Kuvio Creative's JR Web Developer
          Apprenticeship.
        </p>
        <p>
          Please go to{" "}
          <span className="italic">
            <Link to="/about">'About'</Link>
          </span>{" "}
          to learn more.
        </p>
      </section>
      <div className="Home__img">
        <img src={markers} alt="markers" />
      </div>
    </div>
  );
}
