function updateWeather(response) {
  let temperature = document.querySelector("#temp-value");
  let city_elt = document.querySelector("#city");
  city_elt.innerHTML = response.data.city;
  temperature.innerHTML = Math.round(response.data.temperature.current);
}

function searchCity(city) {
  let apiKey = `893fc75a240abbc6oc34eddd57f08bta`;
  let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(url).then(updateWeather);
}

function search(event) {
  event.preventDefault();
  let search_input = document.querySelector("#search-input");
  searchCity(search_input.value);
}
let form_elt = document.querySelector("#search-form");
form_elt.addEventListener("submit", search);

searchCity("Addis Ababa");
