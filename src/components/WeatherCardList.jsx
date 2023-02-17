import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import WeatherCard from "./WeatherCardToday";

const WeatherCardList = (props) => {
  const [weatherDays, setWeatherDays] = useState([]);

  const baseUrl =
    "https://api.openweathermap.org/data/2.5/forecast?appid=fad6b6ba29a0cab57650fdbccd10c8e5&units=metric&lang=it";
  const retriveData = async () => {
    try {
      const res = await fetch(baseUrl + "&q=" + props.city);

      if (res.ok) {
        const body = await res.json();
        console.log(body.list);

        setWeatherDays(body.list);
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
    <Row>
      {weatherDays.map((day) => (
        <WeatherCard key={day.dt} day={day} />
      ))}
    </Row>
  );
};

export default WeatherCardList;
