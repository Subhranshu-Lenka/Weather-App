const apiKey = "c79dd6e9cd0daad3e05692a92de98644";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
    const response = await fetch(apiURL + `&q=${city}` + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = `${data.main.temp}°C`;
    document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
    document.querySelector(".wind").innerHTML = `${data.wind.speed} km/hr`;
}


searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value)
});
// checkWeather(delhi);

