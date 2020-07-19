import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Movies() {
  const linkStyle = {
    color: "black",
  };

  useEffect(() => {
    fetchCinemaworldItems();
  }, []);

  const [itemsCinemaworld, setItemsCinemaworld] = useState([]);

  const fetchCinemaworldItems = async () => {
    const data = await fetch(
      "https://challenge.lexicondigital.com.au/api/cinemaworld/movies",
      { headers: { "x-api-key": "Yr2636E6BTD3UCdleMkf7UEdqKnd9n361TQL9An7" } }
    );
    //console.log(data);
    const items = await data.json();
    const myItems = items.Movies;
    //console.log(items.Movies);
    setItemsCinemaworld(myItems);
  };

  return (
    <div>
      <br />
      {itemsCinemaworld.map((item) => (
        <h5 key={item.ID}>
          <Link to={`/movies/${item.ID}`} style={linkStyle}>
            {item.Title}
          </Link>
        </h5>
      ))}
      <br />
    </div>
  );
}

export default Movies;

/**
 * function Movies() {
  useEffect(() => {
    fetchCinemaworldItems();
    fetchFilmworldItems();
  }, []);

  const [itemsCinemaworld, setItemsCinemaworld] = useState([]);
  const [itemsFilmworld, setItemsFilmworld] = useState([]);

  const fetchCinemaworldItems = async () => {
    const data = await fetch(
      "https://challenge.lexicondigital.com.au/api/cinemaworld/movies",
      { headers: { "x-api-key": "Yr2636E6BTD3UCdleMkf7UEdqKnd9n361TQL9An7" } }
    );
    //console.log(data);
    const items = await data.json();
    const myItems = items.Movies;
    //console.log(items.Movies);
    setItemsCinemaworld(myItems);
  };

  const fetchFilmworldItems = async () => {
    const data = await fetch(
      "https://challenge.lexicondigital.com.au/api/filmworld/movies",
      { headers: { "x-api-key": "Yr2636E6BTD3UCdleMkf7UEdqKnd9n361TQL9An7" } }
    );
    //console.log(data);
    const items = await data.json();
    const myItems = items.Movies;
    //console.log(items.Movies);
    setItemsFilmworld(myItems);
  };

  //console.log(items);

  return (
    <div>
      Cinemaworld
      {itemsCinemaworld.map((item) => (
        <h5 key={item.ID}>
          <Link to={`/movies/${item.ID}`}>{item.Title}</Link>
        </h5>
      ))}
      <br />
      Filmworld
      {itemsFilmworld.map((item) => (
        <h5 key={item.ID}>
          <Link to={`/movies/${item.ID}`}>{item.Title}</Link>
        </h5>
      ))}
    </div>
  );
}
 */
