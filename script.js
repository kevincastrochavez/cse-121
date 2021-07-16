const API_KEY = "90110c6c5296ba96a34270bcbcee731b";
const CITY_ID = "5605242";

const fiveDayForecast = async () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const imagesArray = Array.from(document.querySelectorAll(".forecast-img"));
  const daysArray = Array.from(document.querySelectorAll(".forecast-day"));
  const temperaturesArray = Array.from(
    document.querySelectorAll(".forecast-temperature")
  );

  const url = `https://api.openweathermap.org/data/2.5/forecast?id=${CITY_ID}&appid=${API_KEY}&units=imperial`;
  const response = await fetch(url);
  const data = await response.json();

  const filteredArray = data.list.filter(
    (el) => el.dt_txt.split(" ")[1] == "09:00:00"
  );

  const dateAndTime = filteredArray.map((el) => el.dt_txt);
  const getDay = dateAndTime.map((el) => getDayOfTheWeek(el));
  const weekDays = getDay.map((day) => days[day]);
  const iconsArray = filteredArray.map((icon) => icon.weather[0].icon);

  daysArray.map((day, i) => (day.textContent = weekDays[i]));
  imagesArray.map(
    (image, i) =>
      (image.src = `https://openweathermap.org/img/w/${iconsArray[i]}.png`)
  );
  temperaturesArray.map(
    (temperature, i) =>
      (temperature.textContent = `${filteredArray[i].main.temp.toFixed(0)}°F`)
  );
};

const getDayOfTheWeek = (dateAndTime) => {
  const date = new Date(dateAndTime);
  const utcDate = new Date(date.toUTCString());
  return utcDate.getUTCDay();
};

fiveDayForecast();
