var APIKey = "69383b3abe7567a76337fff968d33b7d";
var city = document.getElementById("searchCity").value;
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + 
city + 
"&appid=" + 
APIKey + 
"&units=imperial";


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
    .then(response => response.json())
    .then(data => console.log(data));

    showCurrent();
//Function to show a card populated by the data from API for searched city
function showCurrent(){ 

    const cityDisplayName = document.querySelectorAll(".currentWeatherCityName")
    const currentDisplayTemp = document.querySelectorAll(".currentWeatherTemp")
    const currentDisplayConditions = document.querySelectorAll(".currentWeatherCondition")
    const currentDisplayWind = document.querySelectorAll(".currentWeatherWind")


    
   
}
};




