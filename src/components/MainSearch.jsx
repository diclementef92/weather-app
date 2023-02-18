import { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap";
import WeatherCard from "./WeatherCardNow";
import WeatherCardList from "./WeatherCardList";

const MainSearch = (props) => {
  // const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.elements.city.value);
    props.setCity(e.target.elements.city.value);
  };

  // const baseUrl =
  //   "https://api.openweathermap.org/data/2.5/forecast?appid=fad6b6ba29a0cab57650fdbccd10c8e5&units=metric&lang=it";
  // const retriveData = async () => {
  //   try {
  //     const res = await fetch(baseUrl + "&q=" + props.city);

  //     if (res.ok) {
  //       const body = await res.json();
  //       console.log(body);

  //       props.setCity(body);
  //     } else {
  //       console.log("Fetch response status: ", res.status);
  //     }
  //   } catch (err) {
  //     console.log("Fetch error: ", err);
  //   }
  // };

  // useEffect(() => {
  //   if (props.city) {
  //     retriveData();
  //   }
  // }, [props.city]);

  return (
    <Container>
      <div className="text-center">
        <h1>Meteo in tempo reale</h1>
      </div>
      <Row>
        <Col xs={12} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="text"
              name="city"
              placeholder="inserisci la tua citta"
            />
          </Form>
        </Col>
        {/* {city ? <WeatherCard day={city} /> : <p></p>} */}
      </Row>
    </Container>
  );
};

export default MainSearch;
