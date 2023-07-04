let counter = 0;
const fetchWeatherDataByCity = async (value) => {
  const baseUrl =
    "https://api.openweathermap.org/data/2.5/weather?appid=fad6b6ba29a0cab57650fdbccd10c8e5&units=metric&lang=it";

  if (counter < 50) {
    try {
      counter++;
      const res = await fetch(baseUrl + "&q=" + value);
      console.log("contatore", counter);
      const body = await res.json();
      if (res.ok) {
        console.log(body);
        return body;
      } else {
        console.log("Fetch response status: ", res.status);
        return { ...body, message: "città non trovata, prova di nuovo" }; //traduco il message in italiano
      }
    } catch (err) {
      return { message: "Errore API, prova di nuovo" };
    }
  } else {
    return {
      message: "Errore numero massimo chiamate, aggiorna la pagina",
    };
  }
};
export default fetchWeatherDataByCity;
