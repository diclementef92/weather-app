let counter = 0;
export const fetchForecastDataByCity = async (city) => {
  const baseUrl =
    "https://api.openweathermap.org/data/2.5/forecast?appid=fad6b6ba29a0cab57650fdbccd10c8e5&units=metric&lang=it";

  if (counter < 50) {
    try {
      counter++;
      const res = await fetch(baseUrl + "&q=" + city);

      const body = await res.json();
      if (res.ok) {
        // console.log(body.list);
        return body.list;
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

//interval in hours
export const fetchForecastDataByCityByInterval = async (city, interval) => {
  const data = await fetchForecastDataByCity(city);
  return data.map((v, i) => i % interval === 0);
};
