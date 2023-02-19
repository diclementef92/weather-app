import { Card, Col } from "react-bootstrap";
import { BsFillCaretUpFill } from "react-icons/bs";
import { BsFillCaretDownFill } from "react-icons/bs";

const ForecastCardHour = (props) => {
  // let hour = props.forecast.dt_txt.split(" ")[1];
  let time = new Date(props.forecast.dt_txt);

  return (
    <Col
      xs={4}
      sm={3}
      md={2}
      className="forecast-card-hour p-0 d-flex flex-column justify-content-center align-items-center"
    >
      <img
        style={{ width: "100%", maxWidth: "100px" }}
        src={`https://openweathermap.org/img/wn/${props.forecast.weather[0].icon}@4x.png`}
      ></img>
      <p className="temp">{props.forecast.main.temp.toFixed(0)}°C</p>
      <p className="temp-max"> {props.forecast.main.temp_max.toFixed(0)}°C</p>
      <p className="temp-min">{props.forecast.main.temp_min.toFixed(0)}°C</p>
      <p className="time">
        {time.getHours() < 10 ? "0" + time.getHours() : time.getHours()}:
        {time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes()}
      </p>
    </Col>
  );
};

export default ForecastCardHour;

{
  /* <Col className="h-100" xs={4}>
      <Card className="mt-4 shadow-lg text-center">
        <Card.Img
          className=""
          variant="top"
          src={`https://openweathermap.org/img/wn/${props.forecast.weather[0].icon}@4x.png`}
        />
        <Card.Body>
          <Card.Text className="temp">
            <Card.Text>{props.forecast.main.temp}°C</Card.Text>
            <span className="max">
              <BsFillCaretUpFill />
              {props.forecast.main.temp_max}
            </span>

            <span className="min">
              <BsFillCaretDownFill />
              {props.forecast.main.temp_min}
            </span>
          </Card.Text>
          <Card.Text className="descr">
            {props.forecast.weather[0].description}
          </Card.Text>
          <Card.Text className="time ">
            {time.getHours() < 10 ? "0" + time.getHours() : time.getHours()}:
            {time.getMinutes() < 10
              ? "0" + time.getMinutes()
              : time.getMinutes()}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col> */
}
