import { Row } from "react-bootstrap";
import ForecastCardHour from "./ForecastCardHour";

const ForecastCardList = (props) => {
  return (
    <Row>
      {props.forecastHours.map((forecast) => (
        <ForecastCardHour key={forecast.dt} forecast={forecast} />
      ))}
    </Row>
  );
};

export default ForecastCardList;
