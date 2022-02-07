import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo.png";
import { Context } from "../store/appContext";
import Card from "../components/Card";

const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.loadCharacters();
    actions.loadPlanets();
    actions.loadVehicles();
  }, []);

  return (
    <div>
      <div className="Card container overflow-auto text-nowrap">
        <h1 className="text-danger">Characters</h1>
        {store.characters?.results?.map((character) => {
          return (
            <Card
              key={character.uid}
              url={character.url}
              title={character.name}
              redirectUrl="/character-detail"
              id={character.uid}
            />
          );
        })}
      </div>
      <div className="Card container overflow-auto text-nowrap">
        <h1 className="text-danger">Planets</h1>
        {store.planets?.results?.map((planet) => {
          return (
            <Card
              key={planet.uid}
              url={planet.url}
              redirectUrl="/planet-detail"
              title={planet.name}
              id={planet.uid}
            />
          );
        })}
      </div>
      <div className="Card container overflow-auto text-nowrap">
        <h1 className="text-danger">Vehicles</h1>
        {store.vehicles?.results?.map((vehicle) => {
          return (
            <Card
              key={vehicle.uid}
              url={vehicle.url}
              redirectUrl="/vehicle-detail"
              title={vehicle.name}
              id={vehicle.uid}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
