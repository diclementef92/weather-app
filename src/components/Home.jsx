import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MainSearch from "./MainSearch";
import WeatherCardToday from "./WeatherCardToday";
import WeatherCardList from "./WeatherCardList";
import WeatherCard from "./WeatherCardToday";

const Home = () => {
  const [weatherCity, setWeatherCity] = useState({});

  const baseUrl =
    "https://api.openweathermap.org/data/2.5/weather?appid=fad6b6ba29a0cab57650fdbccd10c8e5&units=metric&lang=it";

  const retriveData = async () => {
    try {
      const res = await fetch(baseUrl + "&q=Milan");

      if (res.ok) {
        const body = await res.json();
        console.log(body);
        setWeatherCity(body);
      } else {
        console.log("Fetch response status: ", res.status);
      }
    } catch (err) {
      console.log("Fetch error: ", err);
    }
  };
  useEffect(() => {
    retriveData();
  }, []);

  return (
    <Container>
      <MainSearch />
      <Row>
        <Col xs={6}>{/* <WeatherCardToday singleDay={weatherCity} /> */}</Col>
        <Col xs={6}>{/* <WeatherCardList /> */}</Col>
      </Row>
    </Container>
  );
};

export default Home;
