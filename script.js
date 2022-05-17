let now = new Date();
let time = document.querySelector("#time");
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

time.innerHTML = `${day} ${hours}:${minutes}`;

//Search City name
/*function search(event) {
  event.preventDefault();
  let searchCity = document.querySelector("#city-input");
  let h3 = document.querySelector("h3");
  h3.innerHTML = `${searchCity.value}`;
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);*/

//apiKey
let apiKey = "8f7be36fb8a4700a809030b5729bb13a";

// quary selectors
let cityInput = document.querySelector("#city-input");
let city = document.querySelector("#city");
let temp = document.querySelector("#temp");
let description = document.querySelector("#description");

// value
function curTemp(response) {
  city.innerHTML = response.data.name;
  temp.innerHTML = Math.round(response.data.main.temp);
  description.innerHTML = response.data.weather[0].main;
}

//search
function search(event) {
  event.preventDefault();
  let cityName = cityInput.value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(curTemp);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

//current location
function currentPosition() {
  navigator.geolocation.getCurrentPosition(function (position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(curTemp);
  });
}
let curlocation = document.querySelector("#location");
curlocation.addEventListener("click", currentPosition);

/*function units(event) {
  event.preventDefault();
  let celsuis = document.querySelector("#temperature");
  temperature.innerHTML = "19";
}
let unit = document.querySelector("#celsuis-link");
unit.addEventListener("click", units);

function Fahranheit(event) {
  event.preventDefault();
  let fahranheit = document.querySelector("#temperature");
  temperature.innerHTML = "66";
}
let element = document.querySelector("#fahranheit-link");
element.addEventListener("click", Fahranheit);*/
