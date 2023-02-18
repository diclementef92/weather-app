let counter = 0;
const fetchForecastDataByCity = async (value) => {
  const baseUrl =
    "https://api.openweathermap.org/data/2.5/forecast?appid=fad6b6ba29a0cab57650fdbccd10c8e5&units=metric&lang=it";

  if (counter < 50) {
    try {
      counter++;
      const res = await fetch(baseUrl + "&q=" + value);

      if (res.ok) {
        const body = await res.json();
        console.log(body.list);
        return body.list;
      } else {
        console.log("Fetch response status: ", res.status);
        return {
          message: "Città non trovata, prova di nuovo",
          status: res.status,
        };
      }
    } catch (err) {
      console.log("Fetch error: ", err);
    }
  } else {
    console.log("limite chiamate raggiunto");
  }
};
export default fetchForecastDataByCity;
