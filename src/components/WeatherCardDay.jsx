import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

const WeatherCardDay = (props) => {
  useEffect(() => {}, []);

  return (
    <Col xs={4}>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={`https://openweathermap.org/img/wn/${props.singleDay.weather[0].icon}@4x.png`}
        />
        <Card.Body>
          <Card.Title>{props.singleDay.main.temp}°C</Card.Title>
          <Card.Text>{props.singleDay.weather[0].description}</Card.Text>
          <Card.Text>Umidità: {props.singleDay.main.humidity}%</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default WeatherCardDay;
