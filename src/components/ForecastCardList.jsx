import ForecastCardHour from "./ForecastCardHour";

const ForecastCardList = (props) => {
  return (
    <>
      {props.forecastHours.map((forecast) => (
        <ForecastCardHour key={forecast.dt} forecast={forecast} />
      ))}
    </>
  );
};

export default ForecastCardList;
