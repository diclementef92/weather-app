import { Card, Col } from "react-bootstrap";

const WeatherCardNow = (props) => {
  return (
    <Col className="mt-4">
      <Card className="shadow-lg">
        <Card.Img
          variant="top"
          src={`https://openweathermap.org/img/wn/${props.singleDay.weather[0].icon}@4x.png`}
        />
        <Card.Body>
          <Card.Title>{props.singleDay.name} - Adesso</Card.Title>
          <Card.Title>{props.singleDay.main.temp}°C</Card.Title>
          <Card.Text>{props.singleDay.weather[0].description}</Card.Text>
          <Card.Text>Umidità: {props.singleDay.main.humidity}%</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default WeatherCardNow;
