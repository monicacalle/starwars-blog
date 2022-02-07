import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { images } from "../../components/images";
import { Context } from "../../store/appContext";
import { useNavigate } from "react-router-dom";
import "./vehicle.css";

const Vehicle = () => {
  const { store } = useContext(Context);
  const [vehicle, setVehicle] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!store.detailsUrl) {
      navigate("/");
    }

    fetch(store.detailsUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setVehicle(data.result?.properties);
      });
  }, []);

  if (!vehicle) {
    return (
      <div className="bg-light">
        <h1 className="preloader"></h1>
      </div>
    );
  }

  return (
    <div className="custom__container">
      <div className="app__character custom__card">
        <img className="image" src={images[vehicle.name]} alt="Card image" />
        <div className="content">
          <h1>{vehicle.name}</h1>
          <p>vehicle class: {vehicle.vehicle_class}</p>
          <p>Cargo capacity: {vehicle.cargo_capacity}</p>
          <p>manufactured: {vehicle.manufactured}</p>

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

export default Vehicle;
