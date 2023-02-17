import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainSearch from "./MainSearch";
import WeatherCardList from "./WeatherCardList";
import WeatherCard from "./WeatherCardToday";

const NotFound = () => {
  return (
    <Container>
      <h2>404 - Pagina Non trovata</h2>
      <Link to="/">Torna alla home</Link>
    </Container>
  );
};

export default NotFound;
