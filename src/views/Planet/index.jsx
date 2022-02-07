import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../store/appContext";
import { images } from "../../components/images";
import { useNavigate } from "react-router-dom";
import "./planet.css";

const Planet = () => {
  const { store } = useContext(Context);
  const [planet, setPlanet] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!store.detailsUrl) {
      navigate("/");
    }

    fetch(store.detailsUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPlanet(data.result?.properties);
      });
  }, []);

  if (!planet) {
    return (
      <div className="bg-light">
        <h1 className="preloader"></h1>
      </div>
    );
  }

  return (
    <div className="custom__container">
      <div className="app__character custom__card">
        <img className="image" src={images[planet.name]} alt="Card image" />
        <div className="content">
          <h1>{planet.name}</h1>
          <p>Climate: {planet.climate}</p>
          <p>Gravity: {planet.gravity}</p>
          <p>Population: {planet.population}</p>

          <Link to="/">
            <svg>
              <rect></rect>
            </svg>
            <div className="go">Go Back</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Planet;
