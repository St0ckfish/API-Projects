const apikey = "f3b40c847d326832eabe59ceb1334388";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiurl2 = `https://api.openweathermap.org/geo/1.0/direct?units=metric&q=`;
const apiurl3 = `https://api.openweathermap.org/data/2.5/forecast?units=metric&q=`;
const searchbox = document.querySelector("#srchinpt");
const searchbtn = document.querySelector("#srchbtn");
const weathericon = document.querySelector("#wearher_img");
const himg1 = document.querySelector("#img6");
const himg2 = document.querySelector("#img9");
const himg3 = document.querySelector("#img12");
const himg4 = document.querySelector("#img3");
const himg5 = document.querySelector("#img06");
const himg6 = document.querySelector("#img09");
const simge1 = document.querySelector("#todayimg");
const simge2 = document.querySelector("#imgd2");
const simge3 = document.querySelector("#imgd3");
const simge4 = document.querySelector("#imgd4");
const simge5 = document.querySelector("#imgd5");



async function checkWeather(cityy) {
    const response = await fetch(apiurl + cityy + `&appid=${apikey}`);
    const response2 = await fetch(apiurl2 + cityy + `&appid=${apikey}`);
    const response3 = await fetch(apiurl3 + cityy + `&appid=${apikey}`);
    if (response.status == 404) {
        document.querySelector("#error").style.color = "#ffffff";
        document.querySelector("#city").innerHTML = Cairo
    }
    if (response.status == 200) {
        document.querySelector("#error").style.color = "rgb(2 6 23)";
    }


    var data = await response.json();
    var data2 = await response2.json();
    var data3 = await response3.json();

    console.log(data);
    console.log(data2);
    console.log(data3);
    console.log(data3.list[0].weather[0].main);
    const d = new Date();
    let hour = d.getHours();
    
    
    //side his 
    
    document.querySelector("#d2").innerHTML = data3.list[8].dt_txt.substr(5,5);
    document.querySelector("#d3").innerHTML = data3.list[16].dt_txt.substr(5,5);
    document.querySelector("#d4").innerHTML = data3.list[24].dt_txt.substr(5,5);
    document.querySelector("#d5").innerHTML = data3.list[32].dt_txt.substr(5,5);


// side his
    document.querySelector("#city").innerHTML = data2[0].name;
    document.querySelector("#temb").innerHTML = `${Math.round(data.main.temp)}°`;
    document.querySelector("#realfeel").innerHTML = `${Math.round(data.main.temp - 2)}°`;
    document.querySelector("#wind").innerHTML = `${Math.round(data3.list[0].wind.speed)} km/h`;
    document.querySelector("#todaytemp").innerHTML = `${Math.round(data3.list[0].main.temp_max)} / ${Math.round(data3.list[0].main.temp_min)}`;
    document.querySelector("#tempd2").innerHTML = `${Math.round(data3.list[8].main.temp_max)} / ${Math.round(data3.list[0].main.temp_min)}`;
    document.querySelector("#tempd3").innerHTML = `${Math.round(data3.list[16].main.temp_max)} / ${Math.round(data3.list[0].main.temp_min)}`;
    document.querySelector("#tempd4").innerHTML = `${Math.round(data3.list[24].main.temp_max)} / ${Math.round(data3.list[0].main.temp_min)}`;
    document.querySelector("#tempd5").innerHTML = `${Math.round(data3.list[32].main.temp_max)} / ${Math.round(data3.list[0].main.temp_min)}`;
    document.querySelector("#todaystat").innerHTML = data3.list[0].weather[0].main;
    document.querySelector("#statd2").innerHTML = data3.list[8].weather[0].main;
    document.querySelector("#statd3").innerHTML = data3.list[16].weather[0].main;
    document.querySelector("#statd4").innerHTML = data3.list[24].weather[0].main;
    document.querySelector("#statd5").innerHTML = data3.list[32].weather[0].main;


    
    // hero2
    document.querySelector("#temp6").innerHTML = `${Math.round(data3.list[2].main.temp)}°`;
    document.querySelector("#temp9").innerHTML = `${Math.round(data3.list[3].main.temp)}°`;
    document.querySelector("#temp12").innerHTML = `${Math.round(data3.list[4].main.temp)}°`;
    document.querySelector("#temp3").innerHTML = `${Math.round(data3.list[5].main.temp)}°`;
    document.querySelector("#temp06").innerHTML = `${Math.round(data3.list[6].main.temp)}°`;
    document.querySelector("#temp09").innerHTML = `${Math.round(data3.list[7].main.temp)}°`;
    
    // chance of rain
    // document.querySelector("#crain1").innerHTML = `Chance of Rain ${data3.list[0].rain["3h"]*100}%`;
    // document.querySelector("#crain2").innerHTML = `${data3.list[0].rain["3h"]*100}%`;
    // chance of rain


    // ******************** sidebar imgs ******************* //

// day1
if(data3.list[0].weather[0].main === "Rain"){
    simge1.src = "./imgs/rain.png";
}
else if(data3.list[0].weather[0].main === "Clouds"){
    simge1.src = "./imgs/cloud.png";
}
else if(data3.list[0].weather[0].main === "Mist"){
    simge1.src = "./imgs/mist.png";
}
else if(data3.list[0].weather[0].main === "Drizzle"){
    simge1.src = "./imgs/drizzle.png";
}
else if(data3.list[0].weather[0].main === "Drizzle"){
    simge1.src = "./imgs/drizzle.png";
}
else if(data3.list[0].weather[0].main === "Snow"){
    simge1.src = "./imgs/snow.png";
}
else if(data3.list[0].weather[0].main === "Storm"){
    simge1.src = "./imgs/storm.png";
}
else {
    if(data3.list[0].weather[0].main === "Clear" && hour >= 12)simge1.src = "./imgs/moon.png";
    else {
        simge1.src = "./imgs/sun.png";
    }
}
// day1
// day2
if(data3.list[8].weather[0].main === "Rain"){
    simge2.src = "./imgs/rain.png";
}
else if(data3.list[8].weather[0].main === "Clouds"){
    simge2.src = "./imgs/cloud.png";
}
else if(data3.list[8].weather[0].main === "Mist"){
    simge2.src = "./imgs/mist.png";
}
else if(data3.list[8].weather[0].main === "Drizzle"){
    simge2.src = "./imgs/drizzle.png";
}
else if(data3.list[8].weather[0].main === "Drizzle"){
    simge2.src = "./imgs/drizzle.png";
}
else if(data3.list[8].weather[0].main === "Snow"){
    simge2.src = "./imgs/snow.png";
}
else if(data3.list[8].weather[0].main === "Storm"){
    simge2.src = "./imgs/storm.png";
}
else {
    if(data3.list[8].weather[0].main === "Clear" && hour >= 12)simge2.src = "./imgs/moon.png";
    else {
        simge2.src = "./imgs/sun.png";
    }
}
// day2
// day3
if(data3.list[16].weather[0].main === "Rain"){
    simge3.src = "./imgs/rain.png";
}
else if(data3.list[16].weather[0].main === "Clouds"){
    simge3.src = "./imgs/cloud.png";
}
else if(data3.list[16].weather[0].main === "Mist"){
    simge3.src = "./imgs/mist.png";
}
else if(data3.list[16].weather[0].main === "Drizzle"){
    simge3.src = "./imgs/drizzle.png";
}
else if(data3.list[16].weather[0].main === "Drizzle"){
    simge3.src = "./imgs/drizzle.png";
}
else if(data3.list[16].weather[0].main === "Snow"){
    simge3.src = "./imgs/snow.png";
}
else if(data3.list[16].weather[0].main === "Storm"){
    simge3.src = "./imgs/storm.png";
}
else {
    if(data3.list[16].weather[0].main === "Clear" && hour >= 12)simge3.src = "./imgs/moon.png";
    else {
        simge3.src = "./imgs/sun.png";
    }
}
// day3
// day4
if(data3.list[24].weather[0].main === "Rain"){
    simge4.src = "./imgs/rain.png";
}
else if(data3.list[24].weather[0].main === "Clouds"){
    simge4.src = "./imgs/cloud.png";
}
else if(data3.list[24].weather[0].main === "Mist"){
    simge4.src = "./imgs/mist.png";
}
else if(data3.list[24].weather[0].main === "Drizzle"){
    simge4.src = "./imgs/drizzle.png";
}
else if(data3.list[24].weather[0].main === "Drizzle"){
    simge4.src = "./imgs/drizzle.png";
}
else if(data3.list[24].weather[0].main === "Snow"){
    simge4.src = "./imgs/snow.png";
}
else if(data3.list[24].weather[0].main === "Storm"){
    simge4.src = "./imgs/storm.png";
}
else {
    if(data3.list[24].weather[0].main === "Clear" && hour >= 12)simge4.src = "./imgs/moon.png";
    else {
        simge4.src = "./imgs/sun.png";
    }
}
// day4
// day5
if(data3.list[32].weather[0].main === "Rain"){
    simge5.src = "./imgs/rain.png";
}
else if(data3.list[32].weather[0].main === "Clouds"){
    simge5.src = "./imgs/cloud.png";
}
else if(data3.list[32].weather[0].main === "Mist"){
    simge5.src = "./imgs/mist.png";
}
else if(data3.list[32].weather[0].main === "Drizzle"){
    simge5.src = "./imgs/drizzle.png";
}
else if(data3.list[32].weather[0].main === "Drizzle"){
    simge5.src = "./imgs/drizzle.png";
}
else if(data3.list[32].weather[0].main === "Snow"){
    simge5.src = "./imgs/snow.png";
}
else if(data3.list[32].weather[0].main === "Storm"){
    simge5.src = "./imgs/storm.png";
}
else {
    if(data3.list[32].weather[0].main === "Clear" && hour >= 12)simge5.src = "./imgs/moon.png";
    else {
        simge5.src = "./imgs/sun.png";
    }
}
// day5


    // ******************** sidebar imgs ******************* //
    // ******************** hero imgs ******************* //

//img1
if(data3.list[6].weather[0].main === "Rain"){
    himg1.src = "./imgs/rain.png";
}
else if(data3.list[6].weather[0].main === "Clouds"){
    himg1.src = "./imgs/cloud.png";
}
else if(data3.list[6].weather[0].main === "Mist"){
    himg1.src = "./imgs/mist.png";
}
else if(data3.list[6].weather[0].main === "Drizzle"){
    himg1.src = "./imgs/drizzle.png";
}
else if(data3.list[6].weather[0].main === "Drizzle"){
    himg1.src = "./imgs/drizzle.png";
}
else if(data3.list[6].weather[0].main === "Snow"){
    himg1.src = "./imgs/snow.png";
}
else if(data3.list[6].weather[0].main === "Storm"){
    himg1.src = "./imgs/storm.png";
}
else if(data3.list[6].weather[0].main === "Clear"){
    himg1.src = "./imgs/sun.png";
   
}
//img1
//img2
if(data3.list[7].weather[0].main === "Rain"){
    himg2.src = "./imgs/rain.png";
}
else if(data3.list[7].weather[0].main === "Clouds"){
    himg2.src = "./imgs/cloud.png";
}
else if(data3.list[7].weather[0].main === "Mist"){
    himg2.src = "./imgs/mist.png";
}
else if(data3.list[7].weather[0].main === "Drizzle"){
    himg2.src = "./imgs/drizzle.png";
}
else if(data3.list[7].weather[0].main === "Drizzle"){
    himg2.src = "./imgs/drizzle.png";
}
else if(data3.list[7].weather[0].main === "Snow"){
    himg2.src = "./imgs/snow.png";
}
else if(data3.list[7].weather[0].main === "Storm"){
    himg2.src = "./imgs/storm.png";
}
else if(data3.list[7].weather[0].main === "Clear"){
    himg2.src = "./imgs/sun.png";
   
}
//img2
//img3
if(data3.list[0].weather[0].main === "Rain"){
    himg3.src = "./imgs/rain.png";
}
else if(data3.list[0].weather[0].main === "Clouds"){
    himg3.src = "./imgs/cloud.png";
}
else if(data3.list[0].weather[0].main === "Mist"){
    himg3.src = "./imgs/mist.png";
}
else if(data3.list[0].weather[0].main === "Drizzle"){
    himg3.src = "./imgs/drizzle.png";
}
else if(data3.list[0].weather[0].main === "Drizzle"){
    himg3.src = "./imgs/drizzle.png";
}
else if(data3.list[0].weather[0].main === "Snow"){
    himg3.src = "./imgs/snow.png";
}
else if(data3.list[0].weather[0].main === "Storm"){
    himg3.src = "./imgs/storm.png";
}
else if(data3.list[0].weather[0].main === "Clear"){
    himg3.src = "./imgs/moon.png";
   
}
//img3
//img4
if(data3.list[1].weather[0].main === "Rain"){
    himg4.src = "./imgs/rain.png";
}
else if(data3.list[1].weather[0].main === "Clouds"){
    himg4.src = "./imgs/cloud.png";
}
else if(data3.list[1].weather[0].main === "Mist"){
    himg4.src = "./imgs/mist.png";
}
else if(data3.list[1].weather[0].main === "Drizzle"){
    himg4.src = "./imgs/drizzle.png";
}
else if(data3.list[1].weather[0].main === "Drizzle"){
    himg4.src = "./imgs/drizzle.png";
}
else if(data3.list[1].weather[0].main === "Snow"){
    himg4.src = "./imgs/snow.png";
}
else if(data3.list[1].weather[0].main === "Storm"){
    himg4.src = "./imgs/storm.png";
}
else if(data3.list[1].weather[0].main === "Clear"){
    himg4.src = "./imgs/moon.png";
   
}
//img4
//img5
if(data3.list[2].weather[0].main === "Rain"){
    himg5.src = "./imgs/rain.png";
}
else if(data3.list[2].weather[0].main === "Clouds"){
    himg5.src = "./imgs/cloud.png";
}
else if(data3.list[2].weather[0].main === "Mist"){
    himg5.src = "./imgs/mist.png";
}
else if(data3.list[2].weather[0].main === "Drizzle"){
    himg5.src = "./imgs/drizzle.png";
}
else if(data3.list[2].weather[0].main === "Drizzle"){
    himg5.src = "./imgs/drizzle.png";
}
else if(data3.list[2].weather[0].main === "Snow"){
    himg5.src = "./imgs/snow.png";
}
else if(data3.list[2].weather[0].main === "Storm"){
    himg5.src = "./imgs/storm.png";
}
else if(data3.list[2].weather[0].main === "Clear"){
    himg5.src = "./imgs/moon.png";
   
}
//img5
//img6
if(data3.list[3].weather[0].main === "Rain"){
    himg6.src = "./imgs/rain.png";
}
else if(data3.list[3].weather[0].main === "Clouds"){
    himg6.src = "./imgs/cloud.png";
}
else if(data3.list[3].weather[0].main === "Mist"){
    himg6.src = "./imgs/mist.png";
}
else if(data3.list[3].weather[0].main === "Drizzle"){
    himg6.src = "./imgs/drizzle.png";
}
else if(data3.list[3].weather[0].main === "Drizzle"){
    himg6.src = "./imgs/drizzle.png";
}
else if(data3.list[3].weather[0].main === "Snow"){
    himg6.src = "./imgs/snow.png";
}
else if(data3.list[3].weather[0].main === "Storm"){
    himg6.src = "./imgs/storm.png";
}
else if(data3.list[3].weather[0].main === "Clear"){
    himg6.src = "./imgs/moon.png";
   
}
//img6



    // ******************** hero imgs ******************* //

    // ******************** main img ******************** //

    if(data.weather[0].main === "Rain"){
        weathericon.src = "./imgs/rain.png";
    }
    else if(data.weather[0].main === "Sand"){
        weathericon.src = "./imgs/sand.png";
    }
    else if(data.weather[0].main === "Clouds"){
        weathericon.src = "./imgs/cloud.png";
    }
    else if(data.weather[0].main === "Mist"){
        weathericon.src = "./imgs/mist.png";
    }
    else if(data.weather[0].main === "Drizzle"){
        weathericon.src = "./imgs/drizzle.png";
    }
    else if(data.weather[0].main === "Drizzle"){
        weathericon.src = "./imgs/drizzle.png";
    }
    else if(data.weather[0].main === "Snow"){
        weathericon.src = "./imgs/snow.png";
    }
    else if(data.weather[0].main === "Storm"){
        weathericon.src = "./imgs/storm.png";
    }
    else {
        if(data.weather[0].main === "Clear" && hour >= 12)weathericon.src = "./imgs/moon.png";
        else {
            weathericon.src = "./imgs/sun.png";
        }
    }
    // ******************** main img ******************** //
}



checkWeather("cairo");

searchbtn.addEventListener("click", () => {

    if (searchbox.value === "") {
        document.querySelector("#error").style.color = "#ffffff";
    }
    else {
        checkWeather(searchbox.value);
        searchbox.value = "";
    }


});
searchbox.addEventListener("keydown",function (e) {
if (e.keyCode === 13 || e.key === "Enter"){
    if (searchbox.value === "") {
        document.querySelector("#error").style.color = "#ffffff";
    }
    else {
        checkWeather(searchbox.value);
        searchbox.value = "";
    }

}
});



// const cityInput = document.querySelector("#srchinpt");
// const searchButton = document.querySelector("#srchbtn");
// // const locationButton = document.querySelector(".location-btn");
// // const currentWeatherDiv = document.querySelector(".current-weather");
// // const weatherCardsDiv = document.querySelector(".weather-cards");
// const API_KEY = "f3b40c847d326832eabe59ceb1334388"; // API key for OpenWeatherMap API
// const createWeatherCard = (cityName, weatherItem, index) => {
//     if(index === 0) { // HTML for the main weather card
//         return `<div class="details">
//                     <h2>${cityName} (${weatherItem.dt_txt.split(" ")[0]})</h2>
//                     <h6>Temperature: ${(weatherItem.main.temp - 273.15).toFixed(2)}°C</h6>
//                     <h6>Wind: ${weatherItem.wind.speed} M/S</h6>
//                     <h6>Humidity: ${weatherItem.main.humidity}%</h6>
//                 </div>
//                 <div class="icon">
//                     <img src="https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@4x.png" alt="weather-icon">
//                     <h6>${weatherItem.weather[0].description}</h6>
//                 </div>`;
//     } else { // HTML for the other five day forecast card
//         return `<li class="card">
//                     <h3>(${weatherItem.dt_txt.split(" ")[0]})</h3>
//                     <img src="https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@4x.png" alt="weather-icon">
//                     <h6>Temp: ${(weatherItem.main.temp - 273.15).toFixed(2)}°C</h6>
//                     <h6>Wind: ${weatherItem.wind.speed} M/S</h6>
//                     <h6>Humidity: ${weatherItem.main.humidity}%</h6>
//                 </li>`;
//     }
// }
// const getWeatherDetails = (cityName, latitude, longitude) => {
//     const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
//     fetch(WEATHER_API_URL).then(response => response.json()).then(data => {
//         console.log(data);

//         // Filter the forecasts to get only one forecast per day
//         const uniqueForecastDays = [];
//         const fiveDaysForecast = data.list.filter(forecast => {
//             const forecastDate = new Date(forecast.dt_txt).getDate();
//             if (!uniqueForecastDays.includes(forecastDate)) {
//                 return uniqueForecastDays.push(forecastDate);
//             }
//         });
//         // Clearing previous weather data
//         cityInput.value = "";
//         currentWeatherDiv.innerHTML = "";
//         weatherCardsDiv.innerHTML = "";
//         // Creating weather cards and adding them to the DOM
//         fiveDaysForecast.forEach((weatherItem, index) => {
//             const html = createWeatherCard(cityName, weatherItem, index);
//             if (index === 0) {
//                 currentWeatherDiv.insertAdjacentHTML("beforeend", html);
//             } else {
//                 weatherCardsDiv.insertAdjacentHTML("beforeend", html);
//             }
//         });        
//     }).catch(() => {
//         alert("An error occurred while fetching the weather forecast!");
//     });
// }
// const getCityCoordinates = () => {
//     const cityName = cityInput.value.trim();
//     if (cityName === "") return;
//     const API_URL = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`;
    
//     // Get entered city coordinates (latitude, longitude, and name) from the API response
//     fetch(API_URL).then(response => response.json()).then(data => {
//         console.log(data);
//         if (!data.length) return alert(`No coordinates found for ${cityName}`);
//         const { lat, lon, name } = data[0];
//         getWeatherDetails(name, lat, lon);
//     }).catch(() => {
//         alert("An error occurred while fetching the coordinates!");
//     });
// }
// const getUserCoordinates = () => {
//     navigator.geolocation.getCurrentPosition(
//         position => {
//             const { latitude, longitude } = position.coords; // Get coordinates of user location
//             // Get city name from coordinates using reverse geocoding API
//             const API_URL = `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${API_KEY}`;
//             fetch(API_URL).then(response => response.json()).then(data => {
//                 const { name } = data[0];
//                 getWeatherDetails(name, latitude, longitude);
//             }).catch(() => {
//                 alert("An error occurred while fetching the city name!");
//             });
//         },
//         error => { // Show alert if user denied the location permission
//             if (error.code === error.PERMISSION_DENIED) {
//                 alert("Geolocation request denied. Please reset location permission to grant access again.");
//             } else {
//                 alert("Geolocation request error. Please reset location permission.");
//             }
//         });
// }
// // locationButton.addEventListener("click", getUserCoordinates);
// searchButton.addEventListener("click", getCityCoordinates);
// cityInput.addEventListener("keyup", e => e.key === "Enter" && getCityCoordinates());