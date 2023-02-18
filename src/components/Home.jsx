import { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import MainSearch from "./MainSearch";
import WeatherCardNow from "./WeatherCardNow";
import fetchWeatherDataByCity from "./fetchWeatherDataByCity";
import ForecastCardList from "./ForecastCardList";
import fetchForecastDataByCity from "./fetchForecastDataByCity";

const Home = () => {
  const [weatherCity, setWeatherCity] = useState(null);
  const [forecastCity, setForecastCity] = useState([]);
  const [city, setCity] = useState("Milano");

  const retriveData = async () => {
    const weatherData = await fetchWeatherDataByCity(city);
    setWeatherCity(weatherData);

    const forecastData = await fetchForecastDataByCity(city);
    setForecastCity(forecastData);
  };

  useEffect(() => {
    retriveData();
  }, [city]);

  return (
    <Container>
      <MainSearch city={city} setCity={setCity} />
      <Row>
        {weatherCity ? (
          weatherCity.status != 404 ? (
            <>
              <Col xs={4}>
                <WeatherCardNow singleDay={weatherCity} />
              </Col>
              <Col>
                <ForecastCardList forecastHours={forecastCity.slice(0, 6)} />
              </Col>
            </>
          ) : (
            <div className="text-center mt-4">
              <span>{weatherCity.message}</span>
            </div>
          )
        ) : (
          <div className="text-center">
            <Spinner animation="border" variant="primary">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}

        {/*<Col xs={6}> <ForecastCardList /> </Col>*/}
      </Row>
    </Container>
  );
};

export default Home;
