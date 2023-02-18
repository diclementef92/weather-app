import { Card, Col } from "react-bootstrap";
import { BsFillCaretUpFill } from "react-icons/bs";
import { BsFillCaretDownFill } from "react-icons/bs";

const WeatherCardNow = (props) => {
  return (
    <>
      <Col xs={3}>
        <img
          style={{ width: "100%", maxWidth: "150px" }}
          src={`https://openweathermap.org/img/wn/${props.singleDay.weather[0].icon}@4x.png`}
        ></img>
      </Col>

      <Col className="d-flex flex-column justify-content-center">
        <p className="descr">{props.singleDay.weather[0].description}</p>

        <p className="city">
          {props.singleDay.name}, {props.singleDay.sys.country}
        </p>
      </Col>
      <Col className="d-flex flex-column  align-items-end">
        <p className="temp">{props.singleDay.main.temp.toFixed(0)}°C</p>
        <p>
          <span className="temp-max">
            {props.singleDay.main.temp_max.toFixed(0)}°C /{" "}
          </span>
          <span className="temp-min">
            {props.singleDay.main.temp_min.toFixed(0)}°C
          </span>
        </p>
      </Col>
    </>
  );
};

export default WeatherCardNow;

{
  /* <Card classNameName=" mt-4 shadow-lg">
        <Card.Img
          variant="top"
          src={`https://openweathermap.org/img/wn/${props.singleDay.weather[0].icon}@4x.png`}
        />
        <Card.Body>
          <Card.Text classNameName="city">
            {props.singleDay.name} - Adesso
          </Card.Text>
          <Card.Text classNameName="temp">
            <Card.Text>
              {props.singleDay.main.temp}
              °C
            </Card.Text>
            <span classNameName="max">
              <BsFillCaretUpFill />
              {props.singleDay.main.temp_max}
            </span>

            <span classNameName="min">
              <BsFillCaretDownFill />
              {props.singleDay.main.temp_min}
            </span>
          </Card.Text>
          <Card.Text classNameName="descr">
            {props.singleDay.weather[0].description}
          </Card.Text>
          <Card.Text classNameName="humidity">
            Umidità: {props.singleDay.main.humidity}%
          </Card.Text>
        </Card.Body>
      </Card> */
}
