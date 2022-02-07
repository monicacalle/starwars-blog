import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { images } from "../../components/images";
import { Context } from "../../store/appContext";
import { useNavigate } from "react-router-dom";
import "./character.css";

const Character = () => {
  const { store } = useContext(Context);
  const [character, setCharacter] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!store.detailsUrl) {
      navigate("/");
    }

    fetch(store.detailsUrl)
      .then((res) => res.json())
      .then((data) => {
        setCharacter(data.result?.properties);
      });
  }, []);

  if (!character) {
    return (
      <div className="bg-light">
        <h1 className="preloader"></h1>
      </div>
    );
  }

  return (
    <div className="custom__container">
      <div className="app__character custom__card">
        <img className="image" src={images[character.name]} alt="Card image" />
        <div className="content">
          <h1>{character.name}</h1>
          <p>Gender: {character.gender}</p>
          <p>DOB: {character.birth_year}</p>
          <p>hair_color: {character.hair_color}</p>

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

export default Character;
