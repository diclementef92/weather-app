import ForecastCardDay from "./ForecastCardDay";
import ForecastCardHour from "./ForecastCardHour";

const ForecastCardListDays = (props) => {
  return (
    <>
      {props.forecastDays.map((forecast) => (
        <ForecastCardDay key={forecast.dt} forecast={forecast} />
      ))}
    </>
  );
};

export default ForecastCardListDays;
