let weatherForecast = [
 {
  day: "Today",
  temperature: {
    high: 55,
    low: 32
  },
  conditions: "sunny",
  astronomy: {
    sunrise: "7:43 AM",
    sunset: "5:09 PM"
  }
 },
 {
  day: "Saturday",
  temperature: {
    high: 50,
    low: 29
   },
  conditions: "cloudy",
  astronomy: {
    sunrise: "7:44 AM",
    sunset: "5:08 PM"
  }
 },
 {
  day: "Sunday",
  temperature: {
    high: 47,
    low: 35
   },
  conditions: "chance of rain",
  astronomy: {
    sunrise: "7:45 AM",
    sunset: "5:07 PM"
  }
 }
]

console.log("Today's conditions:", weatherForecast[0].conditions);
console.log("Saturday's high:", weatherForecast[1].temperature.high);
console.log("Saturday's sunrise:", weatherForecast[1].astronomy.sunrise);
console.log("Sunday's conditions:", weatherForecast[2].conditions);
console.log("Sunday's sunset:", weatherForecast[2].astronomy.sunset);

console.log(
  `The high on Sunday will be ${weatherForecast[2].temperature.high} and the low will be ${weatherForecast[2].temperature.low}. ` +
  `We're predicting ${weatherForecast[2].conditions}. The sun will rise at ${weatherForecast[2].astronomy.sunrise} and set at ${weatherForecast[2].astronomy.sunset}.`
);  