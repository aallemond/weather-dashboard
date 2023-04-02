var APIKey = "69383b3abe7567a76337fff968d33b7d";
// var today = moment().format('L');
var searchHistory = [];
const currentData = {};
const fiveDayData = {};

// Function to get current weather data from API
function currentConditions(city) {
    var city = document.getElementById("searchCity").value;
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + 
    city + 
    "&appid=" + 
    APIKey + 
    "&units=imperial";

  

    fetch(queryURL)
    .then(res=> res.json())
    .then((data) => {
     console.log(data);
     showCurrent(data);

 });
    

   
//Function to show a card populated by the data from API for searched city
function showCurrent(city){ 

    const cityDisplayName = document.querySelector("#currentWeatherCityName");
    cityDisplayName.textContent = city.name;
    const currentDisplayTemp = document.querySelector("#currentWeatherTemp");
    currentDisplayTemp.textContent = city.main.temp + "°F";
    const currentDisplayConditions = document.querySelector("#currentWeatherCondition");
    currentDisplayConditions.textContent = city.weather.main;
    const currentDisplayWind = document.querySelector("#currentWeatherWind");
    currentDisplayWind.textContent = city.wind.speed + " MPH";

    document.getElementById("currentWeatherCard").style.display = "block";
}

// // Function to get 5 day forecast for searched city
// function fiveDayForecast(city) {
//     var city = document.getElementById("searchCity").value;
//     var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + 
//     city + 
//     "&appid=" + 
//     APIKey + 
//     "&units=imperial";

//     fetch(queryURL)
//     .then(res => res.json())
//     .then((data)=> {
//         console.log(data);
//         fiveDayForecast(data);
//     })


// };

};





