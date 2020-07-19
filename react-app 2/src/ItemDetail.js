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

/**
 * function Item({ match }) {
  const [cinemaToShow, setCinemaToShow] = useState("");
  const [itemCinemaworld, setItemCinemaworld] = useState({
    images: {},
  });
  const [itemFilmworld, setItemFilmworld] = useState({
    images: {},
  });

  useEffect(() => {
    const matchStr = match.params.id.substring(0, 2);
    const abortController = new AbortController();
    const signal = abortController.signal;

    if (matchStr === "cw") {
      fetchCinemaworldItem({ signal: signal });
      setCinemaToShow("Cinemaworld");
    } else {
      fetchFilmworldItem({ signal: signal });
      setCinemaToShow("Filmworld");
    }
    return function cleanup() {
      abortController.abort();
    };
  }, []);

  const fetchCinemaworldItem = async () => {
    const fetchCinemaworldItems = await fetch(
      "https://challenge.lexicondigital.com.au/api/cinemaworld/movie/" +
        match.params.id,
      {
        headers: {
          "x-api-key": "Yr2636E6BTD3UCdleMkf7UEdqKnd9n361TQL9An7",
        },
      }
    );
    const item = await fetchCinemaworldItems.json();
    setItemCinemaworld(item);
    console.log(item);
  };

  const fetchFilmworldItem = async () => {
    const fetchFilmworldItems = await fetch(
      "https://challenge.lexicondigital.com.au/api/filmworld/movie/" +
        match.params.id,
      {
        headers: {
          "x-api-key": "Yr2636E6BTD3UCdleMkf7UEdqKnd9n361TQL9An7",
        },
      }
    );
    const item = await fetchFilmworldItems.json();
    setItemFilmworld(item);
    console.log(item);
  };

  return (
    <div>
      {cinemaToShow === "Cinemaworld" ? (
        <div>
          <h2>Cinemaworld Movies</h2>
          <ul>
            <img src={itemCinemaworld.Poster} alt="" />
            <h5>{itemCinemaworld.Tile}</h5>
            <h5>{itemCinemaworld.Year}</h5>
            <h5>{itemCinemaworld.Genre}</h5>
            <h5>{itemCinemaworld.Rated}</h5>
            <h5>{itemCinemaworld.Released}</h5>
            <h5>{itemCinemaworld.Language}</h5>
          </ul>
        </div>
      ) : (
        <div>
          <h2>Filmworld Movies</h2>
          <ul>
            <img src={itemFilmworld.Poster} alt="" />
            <h5>{itemFilmworld.Tile}</h5>
            <h5>{itemFilmworld.Year}</h5>
            <h5>{itemFilmworld.Genre}</h5>
            <h5>{itemFilmworld.Rated}</h5>
            <h5>{itemFilmworld.Released}</h5>
            <h5>{itemFilmworld.Language}</h5>
          </ul>
        </div>
      )}
    </div>
  );
}
 */
