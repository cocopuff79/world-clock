function updateCityTime(cityId, timezone) {
  let cityElement = document.querySelector(cityId);
  let dateElement = cityElement.querySelector(".date");
  let timeElement = cityElement.querySelector(".time");

  let now = moment().tz(timezone);

  dateElement.innerHTML = now.format("MMMM Do, YYYY");
  timeElement.innerHTML = now.format("h:mm:ss [<small>]A[</small>]");
}

setInterval(function () {
  updateCityTime("#los-angeles", "America/Los_Angeles");
  updateCityTime("#new-york", "America/New_York");
}, 1000);
