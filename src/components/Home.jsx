import { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import MainSearch from "./MainSearch";
import WeatherCardNow from "./WeatherCardNow";
import WeatherCardList from "./WeatherCardList";

const Home = () => {
  const [weatherCity, setWeatherCity] = useState(null);
  const [city, setCity] = useState("");

  const baseUrl =
    "https://api.openweathermap.org/data/2.5/weather?appid=fad6b6ba29a0cab57650fdbccd10c8e5&units=metric&lang=it";

  const retriveData = async () => {
    try {
      const res = await fetch(baseUrl + "&q=Milan");

      if (res.ok) {
        const body = await res.json();
        setWeatherCity(body);
        console.log(weatherCity);
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
      <MainSearch setCity={setCity} />
      <Row>
        {weatherCity ? (
          <Col xs={6}>
            <WeatherCardNow singleDay={weatherCity} />{" "}
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
