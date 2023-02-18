import { Card, Col } from "react-bootstrap";
import { BsFillCaretUpFill } from "react-icons/bs";
import { BsFillCaretDownFill } from "react-icons/bs";

const ForecastCardHour = (props) => {
  // let hour = props.forecast.dt_txt.split(" ")[1];
  let time = new Date(props.forecast.dt_txt);

  return (
    <Col xs={2}>
      <img
        style={{ width: "100%", maxWidth: "150px" }}
        src={`https://openweathermap.org/img/wn/${props.forecast.weather[0].icon}@4x.png`}
      ></img>
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
