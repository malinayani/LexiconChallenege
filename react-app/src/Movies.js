import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Row, Col } from "react-simple-flex-grid";
import "react-simple-flex-grid/lib/main.css";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

function Movies() {
  const linkStyle = {
    color: "black",
  };

  const [itemsCinemaworld, setItemsCinemaworld] = useState([]);

  useEffect(() => {
    fetchCinemaworldItems();
    //const interval = setInterval(() => {
    //  fetchCinemaworldItems();
    //}, 3000);
    //return () => clearInterval(interval);
  }, []);

  const fetchCinemaworldItems = async () => {
    const data = await fetch(
      "https://challenge.lexicondigital.com.au/api/cinemaworld/movies",
      { headers: { "x-api-key": "Yr2636E6BTD3UCdleMkf7UEdqKnd9n361TQL9An7" } }
    );
    //console.log(data);
    const items = await data.json();
    //console.log(data);
    //console.log(data.json.Movies);
    //console.log(items.Movies);
    setItemsCinemaworld(items.Movies);
  };

  return (
    <Row gutter={40} justify="center">
      <Col xs={{ span: 12 }} sm={{ span: 10 }}>
        <Row gutter={40}>
          <Col span={12}>
            <div className="companyList">
              <h2>All Movies</h2>
              <Row gutter={10}>
                {itemsCinemaworld.map((item) => (
                  <Col md={{ span: 3 }}>
                    <Link to={`/movies/${item.ID}`} style={linkStyle}>
                      {<img src={`${item.Poster}.jpg`} width="100%" />}
                      {item.Title}
                    </Link>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Movies;

