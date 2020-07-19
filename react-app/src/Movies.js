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
            {/* {item.Title} */}
            <div class="topContainer">
            <img src={item.Poster} alt="" />
            </div>
          </Link>
        </h5>
      ))}
      <br />
      horizontal = {true}
    </div>
  );
}

export default Movies;


