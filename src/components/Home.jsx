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
    <Container style={{ width: "50vw" }}>
      <MainSearch city={city} setCity={setCity} />
      <Row
        className="d-flex align-items-center weather-card-now"
        style={{ margin: "10px auto  0 auto" }}
      >
        {weatherCity ? (
          weatherCity.status != 404 ? (
            <>
              <WeatherCardNow singleDay={weatherCity} />
            </>
          ) : (
            <div className="text-center p-4">
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
      </Row>
      <Row className="w-100 m-0 mt-2">
        <ForecastCardList forecastHours={forecastCity.slice(0, 6)} />
      </Row>
    </Container>
  );
};

export default Home;

{
  /* <ForecastCardList forecastHours={forecastCity.slice(0, 6)} /> */
}
