import ForecastCardDay from "./ForecastCardDay";

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
