import { Col } from "react-bootstrap";
const weekday = ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"];

const ForecastCardDay = (props) => {
  let time = new Date(props.forecast.dt_txt);

  return (
    <Col
      xs={6}
      md={3}
      className="forecast-card-hour p-0 d-flex flex-column justify-content-center align-items-center"
    >
      <img
        style={{ width: "100%", maxWidth: "100px" }}
        src={`https://openweathermap.org/img/wn/${props.forecast.weather[0].icon}@4x.png`}
        alt={`forecast-icon-${props.forecast.weather[0].icon}`}
      ></img>
      <p className="temp">{props.forecast.main.temp.toFixed(0)}°C</p>
      <p className="time">
        {weekday[time.getDay()]} {time.getDate()}/{time.getMonth() + 1}
      </p>
    </Col>
  );
};

export default ForecastCardDay;
