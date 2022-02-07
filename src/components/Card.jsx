import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heart from "../components/heart.jpg";
import blankHeart from "../components/heart.png";
import { Context } from "../store/appContext";
import { images } from "./images";

const Card = (props) => {
  const [imageSrc, setImgSrc] = useState();
  const { actions, store } = useContext(Context);

  useEffect(() => {
    setImgSrc(images[props.title]);
  }, []);

  const handleClick = () => {
    actions.setDetailsUrl(props.url);
  };

  const setFavorite = () => {
    actions.setFavorites(props.title, props.id);
  };

  const isFavorite = () => {
    const existInFavorite = store.favorites.find(
      (favorite) => favorite.name === props.title
    );

    return existInFavorite != null;
  };

  return (
    <div
      className="card d-inline-block px-3 py-3 text-wrap mx-1 my-4"
      style={{ width: "22rem" }}
    >
      <img
        className="card-img-top"
        src={imageSrc}
        alt="Card image cap"
        style={{
          height: "250px",
          objectFit: "cover",
        }}
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        {props.information?.eyes ? (
          <p className="card-text">{props.information.eyes}</p>
        ) : null}

        <div className="d-flex justify-content-between">
          <Link
            to={props.redirectUrl}
            onClick={handleClick}
            className="btn btn-primary"
          >
            Check me out!
          </Link>
          <img
            className="border border-warning "
            width="30"
            height="30"
            src={isFavorite() ? heart : blankHeart}
            alt="heart"
            onClick={setFavorite}
            style={{
              cursor: "pointer",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
