let todaysWeather = {
  temperature: {
    high: 55,
    low: 32
  },
  conditions: "sunny",
  astronomy: {
    sunrise: "7:43 AM",
    sunset: "5:09 PM"
  }
}

console.log("Today's high:", todaysWeather.temperature.high); 

console.log("Today's low:", todaysWeather.temperature.low);
 
console.log("Today's conditions:", todaysWeather.conditions);

console.log("Today's sunrise:", todaysWeather.astronomy.sunrise);
 
console.log(
  `Today in Ho Chi Minh City it will be ${todaysWeather.conditions}. ` +
  `The high will be ${todaysWeather.temperature.high} degrees and the low will be ${todaysWeather.temperature.low} degrees. ` +
  `The sun rose at ${todaysWeather.astronomy.sunrise} and will set at ${todaysWeather.astronomy.sunset}.`
);