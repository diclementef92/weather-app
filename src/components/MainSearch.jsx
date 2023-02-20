import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

import fetchCities from "./fetchCities";

const MainSearch = (props) => {
  const [citiesResults, setCitiesResults] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // props.setCity(e.target.value);
    props.setCity(e.target.elements.city.value);
  };

  const handleChange = async (e) => {
    const cities = await fetchCities(e.target.value);
    // setCityName(e.target.value)
    setCitiesResults(cities);
  };

  const citySelected = (e) => {
    // props.setCity(e.target.elements.city.value);
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
            onChange={(e) => handleChange(e)}
          />
          {!citiesResults.message ? (
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
            <p>{citiesResults.message}</p>
          )}
        </Form>
      </div>
    </>
  );
};

export default MainSearch;

{
  /*         <Form onSubmit={handleSubmit} style={{ margin: "0 auto  0 auto" }}>
          <Form.Control
            type="text"
            name="city"
            className="text-center"
            placeholder="inserisci la tua citta"
            onChange={handleChange}
          />
  
        </Form><Select className="bg-light">
{citiesResults.length > 0
  ? citiesResults.map((city, index) => (
      <option
        key={`${city.name}-${index}`}
        value={`{city.name},{city.state},{city.country}`}
      >
        {city.name}, {city.state}, {city.country}
      </option>
    ))
  : ""}
</Select> */
}
