const api_key = `af869466d77b7c0f89851135b36e5a28`;
const SearchTemperature = () => {
    const input = document.getElementById('city');
    const cityName = input.value;
    input.value = '';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_key}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
}

//seting city ,temp,weather in website
const setInnerText = (text, id) => {
    // const city = document.getElementById(id);
    // city.innerText =text;
    document.getElementById(id).innerText = text;
}
const modifyIcon = (icon, id) => {
    const img = document.getElementById(id);
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    img.setAttribute('src', iconUrl);
}

const displayTemperature = (data) => {
    console.log(data);
    setInnerText(data.name, "city-id");
    modifyIcon(data.weather[0].icon, "icon-id");
    setInnerText(data.main.temp, "temp-id");
    setInnerText(data.weather[0].main, "weather-id");

}