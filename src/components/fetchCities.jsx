let counter = 0;
const fetchCities = async (value) => {
  const baseUrl =
    "http://api.openweathermap.org/geo/1.0/direct?appid=fad6b6ba29a0cab57650fdbccd10c8e5&limit=5";

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
        return { ...body, message: "città non trovata, prova di nuovo" };
      }
    } catch (err) {
      console.log("Fetch error: ", err);
    }
  } else {
    console.log("limite chiamate raggiunto");
  }
};
export default fetchCities;
