import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Item({ match }) {
  const [cinemaToShow, setCinemaToShow] = useState("");
  const [itemCinemaworld, setItemCinemaworld] = useState({
    images: {},
  });
  const [itemFilmworld, setItemFilmworld] = useState({
    images: {},
  });

  const [priceCinemaworld, setPriceCinemaworld] = useState(0);
  const [priceFilmworld, setPriceFilmworld] = useState("");

  const subStr = match.params.id.substring(2);

  useEffect(() => {
    const matchStr = match.params.id.substring(0, 2);
    const abortController = new AbortController();
    const signal = abortController.signal;

    fetchCinemaworldItem({ signal: signal });
    fetchFilmworldItem({ signal: signal });

    return function cleanup() {
      abortController.abort();
    };
  }, []);

  const fetchCinemaworldItem = async () => {
    const fetchCinemaworldItems = await fetch(
      "https://challenge.lexicondigital.com.au/api/cinemaworld/movie/cw" +
        subStr,
      {
        headers: {
          "x-api-key": "Yr2636E6BTD3UCdleMkf7UEdqKnd9n361TQL9An7",
        },
      }
    );
    const item = await fetchCinemaworldItems.json();
    setPriceCinemaworld(item.Price);
    setItemCinemaworld(item);
    console.log("CINEMAWORLD", item);
  };

  const fetchFilmworldItem = async () => {
    const fetchFilmworldItems = await fetch(
      "https://challenge.lexicondigital.com.au/api/filmworld/movie/fw" + subStr,
      {
        headers: {
          "x-api-key": "Yr2636E6BTD3UCdleMkf7UEdqKnd9n361TQL9An7",
        },
      }
    );
    const item = await fetchFilmworldItems.json();
    setPriceFilmworld(item.Price);
    setItemFilmworld(item);
    console.log("FILMWORLD", item);
  };

  return (
    <div>
      <br />
      <img src={itemCinemaworld.Poster} alt="" />
      <br />
      <br />

      <h5>Cinemaworld Price: {priceCinemaworld}</h5>
      <div>
        <h5>Filmworld Price: {priceFilmworld}</h5>
      </div>
      <Link to={`/movies`}>Back to Movies</Link>
      <br />
    </div>
  );
}

export default Item;

