var APIKey = "69383b3abe7567a76337fff968d33b7d";
// var today = moment().format('L');
var searchHistory = [];
const currentData = {};
const fiveDayData = {};

// Function to get current weather data from API
// function currentConditions(city) {
//     var city = document.getElementById("searchCity").value;
//     var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + 
//     city + 
//     "&appid=" + 
//     APIKey + 
//     "&units=imperial";

  

//     fetch(queryURL)
//     .then(res=> res.json())
//     .then((data) => {
//      console.log(data);
//      showCurrent(data);

//  });

//Function to get 5 day forecast for searched city
function currentConditions(city) {
    var city = document.getElementById("searchCity").value;
    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + 
    city + 
    "&appid=" + 
    APIKey + 
    "&units=imperial";

  

    fetch(queryURL)
    .then(res=> res.json())
    .then((data) => {
     console.log(data);
     showCurrent(data);
     showfiveDay(data);

 });
    

   
//Function to show a current weather card populated by the data from API for searched city
function showCurrent(data){ 

    const cityDisplayName = document.querySelector("#currentWeatherCityName");
    cityDisplayName.textContent = data.city.name;
    const currentDisplayTemp = document.querySelector("#currentWeatherTemp");
    currentDisplayTemp.textContent = Number(data.list[i = 0].main.temp).toFixed(0) + "°F";
    const currentDisplayConditions = document.querySelector("#currentWeatherCondition");
    currentDisplayConditions.textContent = data.list[i = 0].weather[i=0].main;
    const currentDisplayWind = document.querySelector("#currentWeatherWind");
    currentDisplayWind.textContent ="Wind Speed: " + Number(data.list[i=0].wind.speed).toFixed(0) + " MPH";

    document.getElementById("currentWeatherCard").style.display = "block";


}

//Function to show five day forecast
function showfiveDay(data){
const fiveDayTemp = document.querySelector('#fiveDayOneTemp');
fiveDayTemp.textContent = Number(data.list[i = 1].main.temp).toFixed(0) + "°F";

document.getElementById("fiveDayCard").style.display = "block"
}
};





