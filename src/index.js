function search(event) {
  event.preventDefault();
  let search_input = document.querySelector("#search-input");
  let city_elt = document.querySelector("#city");
  city_elt.innerHTML = search_input.value;
}
let form_elt = document.querySelector("#search-form");
form_elt.addEventListener("submit", search);
