const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
      character: {},
      planets: [],
      planet: {},
      vehicles: [],
      vehicle: {},
      favorites: [],
      detailsUrl: "",
    },
    actions: {
      loadCharacters: () => {
        fetch("https://www.swapi.tech/api/people/")
          .then((response) => response.json())
          .then((data) => {
            setStore({ characters: data });
          });
      },
      loadPlanets: () => {
        fetch("https://www.swapi.tech/api/planets/")
          .then((response) => response.json())
          .then((data) => {
            setStore({ planets: data });
          });
      },
      loadVehicles: () => {
        fetch("https://www.swapi.tech/api/vehicles/")
          .then((response) => response.json())
          .then((data) => {
            setStore({ vehicles: data });
          });
      },
      setDetailsUrl: (url) => {
        setStore({ detailsUrl: url });
      },
      setFavorites: (name, id) => {
        const store = getStore();

        const favoriteExists = store.favorites.find(
          (favorite) => favorite.id === id && favorite.name === name
        );

        if (favoriteExists) {
          const newFavoritesList = store.favorites.filter(
            (favorite) => favorite.name !== name && favorite.id !== id
          );
          console.log("deleting", newFavoritesList);
          setStore({ favorites: newFavoritesList });
        } else {
          const newFavorite = { name: name, id: id };
          const newFavoriteList = [newFavorite, ...store.favorites];
          console.log("adding", newFavoriteList);
          setStore({ favorites: newFavoriteList });
        }
      },
    },
  };
};

export default getState;
