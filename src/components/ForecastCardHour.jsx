import { Col } from "react-bootstrap";

const ForecastCardHour = (props) => {
  let time = new Date(props.forecast.dt_txt);

  return (
    <Col
      xs={4}
      md={2}
      className="forecast-card-hour p-0 d-flex flex-column justify-content-center align-items-center"
    >
      <img
        style={{ width: "100%", maxWidth: "100px" }}
        src={`https://openweathermap.org/img/wn/${props.forecast.weather[0].icon}@4x.png`}
        alt={`forecast-icon-${props.forecast.weather[0].icon}`}
      ></img>
      <p className="temp">{props.forecast.main.temp.toFixed(0)}°C</p>
      <p className="time">
        {time.getHours() < 10 ? "0" + time.getHours() : time.getHours()}:
        {time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes()}
      </p>
    </Col>
  );
};

export default ForecastCardHour;
