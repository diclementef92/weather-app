const fetchWeatherDataByCity = async (value) => {
  const baseUrl =
    "https://api.openweathermap.org/data/2.5/weather?appid=fad6b6ba29a0cab57650fdbccd10c8e5&units=metric&lang=it";
  let counter = 0;

  if (counter < 50) {
    try {
      counter++;
      const res = await fetch(baseUrl + "&q=" + value);

      if (res.ok) {
        const body = await res.json();
        console.log(body);
        return body;
      } else {
        console.log("Fetch response status: ", res.status);
      }
    } catch (err) {
      console.log("Fetch error: ", err);
    }
  } else {
    console.log("limite chiamate raggiunto");
  }
};
export default fetchWeatherDataByCity;
