import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Home from "../views/Home";
import Logo from "../components/Logo.png";
import trashIcon from "./trash-can.png";
const Navbar = () => {
  const { store, actions } = useContext(Context);

  const handleRemoveFromFavorites = (name, id) => [
    actions.setFavorites(name, id),
  ];

  return (
    <nav className="navbar navbar-light bg-light">
      <Link className="navbar_brand" to="/">
        <img src={Logo} width="120" className="align-top mx-3 " alt="" />
      </Link>
      <div className="">
        <div class="dropdown mx-3">
          <button
            className="btn btn-dark px-4 py-2 rounded  dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites
          </button>
          <ul
            className="dropdown-menu my-4 m-0 px-4 "
            aria-labelledby="dropdownMenuButton1"
          >
            {store.favorites.map((favorite, index) => {
              return (
                <div
                  className="d-flex  justify-content-between"
                  onClick={() =>
                    handleRemoveFromFavorites(favorite.name, favorite.id)
                  }
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <li style={{ cursor: "pointer", padding: "5px" }} key={index}>
                    {favorite.name}
                  </li>
                  <span>
                    <img
                      style={{
                        width: "20px",
                      }}
                      src={trashIcon}
                    />
                  </span>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
