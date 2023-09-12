const getIconUrl = (icon) => {
  const baseLink =
    "https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/";
  switch (icon) {
    case "01d":
      return baseLink + "day.svg";
    case "01n":
      return baseLink + "night.svg";
    case "02d":
      return baseLink + "cloudy-day-1.svg";
    case "02n":
      return baseLink + "cloudy-night-1.svg";
    case "03d":
      return baseLink + "cloudy.svg";
    case "03n":
      return baseLink + "cloudy.svg";
    case "04d":
      return baseLink + "cloudy-day-3.svg";
    case "04n":
      return baseLink + "cloudy-night-3.svg";
    case "09d":
      return baseLink + "rainy-4.svg";
    case "09n":
      return baseLink + "rainy-4.svg";
    case "10d":
      return baseLink + "rainy-5.svg";
    case "10n":
      return baseLink + "rainy-5.svg";
    case "11d":
      return baseLink + "thunder.svg";
    case "11n":
      return baseLink + "thunder.svg";
    case "13d":
      return baseLink + "snowy-5.svg";
    case "13n":
      return baseLink + "snowy-5.svg";

    default:
      return `https://openweathermap.org/img/wn/${icon}@04x.png`;
  }
};
export default getIconUrl;
