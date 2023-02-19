import { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
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

      {weatherCity ? (
        weatherCity.cod != 404 ? (
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
      <Row className="w-100 m-0 mt-2">
        {forecastCity.cod != 404 ? (
          <ForecastCardList forecastHours={forecastCity.slice(0, 6)} />
        ) : (
          ""
        )}
      </Row>
    </Container>
  );
};

export default Home;
