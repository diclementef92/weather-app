import { Card, Col } from "react-bootstrap";
import { BsFillCaretUpFill } from "react-icons/bs";
import { BsFillCaretDownFill } from "react-icons/bs";

const WeatherCardNow = (props) => {
  return (
    <Col className="">
      <Card className=" mt-4 shadow-lg">
        <Card.Img
          variant="top"
          src={`https://openweathermap.org/img/wn/${props.singleDay.weather[0].icon}@4x.png`}
        />
        <Card.Body>
          <Card.Text className="city">
            {props.singleDay.name} - Adesso
          </Card.Text>
          <Card.Text className="temp">
            <Card.Text>
              {props.singleDay.main.temp}
              °C
            </Card.Text>
            <span className="max">
              <BsFillCaretUpFill />
              {props.singleDay.main.temp_max}
            </span>

            <span className="min">
              <BsFillCaretDownFill />
              {props.singleDay.main.temp_min}
            </span>
          </Card.Text>
          <Card.Text className="descr">
            {props.singleDay.weather[0].description}
          </Card.Text>
          <Card.Text className="humidity">
            Umidità: {props.singleDay.main.humidity}%
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default WeatherCardNow;
