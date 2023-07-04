import { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import MainSearch from "./MainSearch";
import WeatherCardNow from "./WeatherCardNow";

import ForecastCardList from "./ForecastCardList";
import { fetchForecastDataByCity } from "../fetches/fetchForecastDataByCity";
import fetchWeatherDataByCity from "../fetches/fetchWeatherDataByCity";
import ForecastCardListDays from "./ForecastCardListDays";

const Home = () => {
  const [weatherCity, setWeatherCity] = useState(null);
  const [forecastCity, setForecastCity] = useState([]);

  const [city, setCity] = useState("Milano");

  const [errMessage, setErrMessage] = useState("");

  const retriveData = async () => {
    const weatherData = await fetchWeatherDataByCity(city);
    if (weatherData.message) {
      setErrMessage(weatherData.message);
      return;
    }
    setWeatherCity(weatherData);

    const forecastData = await fetchForecastDataByCity(city);
    if (weatherData.message) {
      setErrMessage(forecastData.message);
      return;
    }
    setForecastCity(forecastData);
  };

  useEffect(() => {
    retriveData();
  }, [city]);

  return (
    <Container>
      <MainSearch city={city} setCity={setCity} />
      {errMessage ? (
        <div className="text-center p-4">
          <span>{errMessage}</span>
        </div>
      ) : weatherCity ? (
        <WeatherCardNow singleDay={weatherCity} />
      ) : (
        <div className="text-center">
          <Spinner animation="border" variant="primary">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
      <Row className="w-100 m-0 mt-2">
        <span className="subtitle">Prossime ore:</span>
        {errMessage ? (
          <div className="text-center p-4">
            <span>{errMessage}</span>
          </div>
        ) : (
          <ForecastCardList forecastHours={forecastCity.slice(0, 6)} />
        )}
      </Row>
      <Row className="w-100 m-0 mt-2">
        <span className="subtitle">Prossimi giorni:</span>
        {errMessage ? (
          <div className="text-center p-4">
            <span>{errMessage}</span>
          </div>
        ) : (
          <ForecastCardListDays
            forecastDays={forecastCity.filter((_, i) => i !== 0 && i % 8 === 0)}
          />
        )}
      </Row>
    </Container>
  );
};

export default Home;
