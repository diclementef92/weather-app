import { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap";
import WeatherCard from "./WeatherCardNow";

const MainSearch = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.elements.city.value);
    props.setCity(e.target.elements.city.value);
  };

  return (
    <>
      <div className="text-center">
        <h1>Meteo in tempo reale</h1>
        <Form onSubmit={handleSubmit} style={{ margin: "0 auto  0 auto" }}>
          <Form.Control
            type="text"
            name="city"
            className="text-center"
            placeholder="inserisci la tua citta"
          />
        </Form>
      </div>
    </>
  );
};

export default MainSearch;
