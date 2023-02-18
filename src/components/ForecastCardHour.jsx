import { Card, Col } from "react-bootstrap";

const ForecastCardHour = (props) => {
  let hour = props.forecast.dt_txt.split(" ")[1];

  return (
    <Col className="mt-4" xs={4}>
      <Card className="shadow-lg">
        <Card.Img
          variant="top"
          src={`https://openweathermap.org/img/wn/${props.forecast.weather[0].icon}@4x.png`}
        />
        <Card.Body>
          <Card.Title>Ore: {hour}</Card.Title>
          <Card.Title>{props.forecast.main.temp}°C</Card.Title>
          {/* <Card.Text>{props.forecast.weather[0].description}</Card.Text> */}
          <Card.Text>Umidità: {props.forecast.main.humidity}%</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ForecastCardHour;
