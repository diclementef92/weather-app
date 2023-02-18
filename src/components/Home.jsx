import { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import MainSearch from "./MainSearch";
import WeatherCardNow from "./WeatherCardNow";
import WeatherCardList from "./WeatherCardList";
import fetchWeatherDataByCity from "./fetchWeatherDataByCity";

const Home = () => {
  const [weatherCity, setWeatherCity] = useState(null);
  const [city, setCity] = useState("Milano");

  const retriveData = async () => {
    const data = await fetchWeatherDataByCity(city);
    setWeatherCity(data);
  };

  useEffect(() => {
    retriveData();
  }, []);

  return (
    <Container>
      <MainSearch city={city} setCity={setCity} />
      <Row>
        {weatherCity ? (
          <Col xs={6}>
            <WeatherCardNow singleDay={weatherCity} />
          </Col>
        ) : (
          <div className="text-center">
            <Spinner animation="border" variant="primary">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}

        <Col xs={6}>{/* <WeatherCardList /> */}</Col>
      </Row>
    </Container>
  );
};

export default Home;
