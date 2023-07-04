import { Col, Row } from "react-bootstrap";
import { BsThermometerHalf } from "react-icons/bs";

const WeatherCardNow = (props) => {
  const toggleSelected = (e) => {
    // $("#weather-info").toggleClass("hidden");
    console.dir(e.currentTarget.nextSibling.classList.toggle("d-none"));
  };

  return (
    <>
      <Row
        className="d-flex align-items-center weather-card-now"
        style={{ margin: "10px auto  0 auto" }}
        onClick={(e) => toggleSelected(e)}
      >
        <Col xs={3}>
          <img
            style={{ width: "100%", maxWidth: "150px" }}
            src={`https://openweathermap.org/img/wn/${props.singleDay.weather[0].icon}@4x.png`}
            alt={`weather-icon-${props.singleDay.weather[0].icon}`}
          ></img>
        </Col>

        <Col className="d-flex flex-column justify-content-center">
          <p className="descr">{props.singleDay.weather[0].description}</p>

          <p className="city">
            {props.singleDay.name}, {props.singleDay.sys.country}
          </p>
        </Col>
        <Col className="d-flex flex-column  align-items-end">
          <p className="temp">
            {props.singleDay.main.temp.toFixed(0)}°C
            <BsThermometerHalf />
          </p>
          <p>
            <span className="temp-max">
              {props.singleDay.main.temp_max.toFixed(0)}°C /{" "}
            </span>
            <span className="temp-min">
              {props.singleDay.main.temp_min.toFixed(0)}°C
            </span>
          </p>
        </Col>
      </Row>
      <Row
        className="w-100 alert alert-light d-none text-center"
        id="weather-info"
        role="alert"
        style={{ margin: "1em auto  2em auto" }}
      >
        <Col xs={4}>Umidità: {props.singleDay.main.humidity} %</Col>
        <Col xs={4}>Pressione: {props.singleDay.main.pressure} hPa</Col>
        <Col xs={4}>Vento: {props.singleDay.wind.speed} m/s</Col>
      </Row>
    </>
  );
};

export default WeatherCardNow;
