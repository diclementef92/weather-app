import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

import fetchCities from "./fetchCities";

const MainSearch = (props) => {
  const [citiesResults, setCitiesResults] = useState([]);
  const [errMessage, setErrMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cities = await fetchCities(e.target[0].value);
    // console.log(e.target[0].value);
    if (cities.message) {
      setErrMessage(cities.message);
    } else {
      setCitiesResults(cities);
    }
  };

  // const handleChange = async (e) => {
  //   const cities = await fetchCities(e.target.value.trim());
  //   setCitiesResults(cities);
  // };

  const citySelected = (e) => {
    props.setCity(e.target.value);
  };

  return (
    <>
      <div className="text-center">
        <h1>Meteo in tempo reale</h1>
        <Form
          onSubmit={(e) => handleSubmit(e)}
          style={{ margin: "0 auto  0 auto" }}
        >
          <Form.Control
            type="select"
            name="city"
            className="text-center"
            placeholder="inserisci la tua citta"
            // onChange={(e) => handleChange(e)}
          />
          {citiesResults && citiesResults.length > 0 ? (
            citiesResults.map((city, index) => (
              <option
                className="city"
                onClick={(e) => citySelected(e)}
                key={`${city.name}-${index}`}
                value={`${city.name},${city.state},${city.country}`}
              >
                {city.name}, {city.state}, {city.country}
              </option>
            ))
          ) : (
            <p>{errMessage}</p>
          )}
        </Form>
      </div>
    </>
  );
};

export default MainSearch;
