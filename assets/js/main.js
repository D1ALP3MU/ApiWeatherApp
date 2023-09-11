const btnQuery = document.querySelector('#btnQuery');

btnQuery.addEventListener('click', fecthWeatherTwo);

// Aplicando async await
async function fecthWeatherTwo() {
    const apiKey = '80b626b94dc8c81bfd23911396d4e3dd';
    const queryCity = document.querySelector('#city').value;

    if (queryCity === '') {
        alert('Please write a city to fetch');
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${queryCity}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const users = await response.json();

        const { name, main: { temp, feels_like, humidity }, wind: { speed }, weather: [ { icon, description } ] } = users;

        let weatherInfo = document.querySelector('#weatherInfo');

        weatherInfo.innerHTML = 
        `<p class="temp">The temperature in ${name} is: ${temp}°C</p>
        <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="system icon">
        <p class="description"><strong>Feels like:</strong> ${feels_like}</p>
        <p class="description"><strong>Humidity:</strong> ${humidity}%</p>
        <p class="description"><strong>Speed:</strong> ${speed}m/s</p>
        <p class="description"><strong>Description:</strong> ${description}</p>
        `;
        
        weatherInfo.style.display = 'block';
    } catch (error) {
        alert(error);
    }
} 

// function fecthWeather() {
//     const apiKey = '80b626b94dc8c81bfd23911396d4e3dd';
//     const queryCity = document.querySelector('#city').value;

//     if (queryCity === '') {
//         alert('Please write a city to fetch');
//         return;
//     }

//     // console.log(queryCity);
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${queryCity}&appid=${apiKey}&units=metric`;

//     fetch(url)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//         const name = data.name;
//         const temperature = data.main.temp;
//         const feelsLike = data.main.feels_like;
//         const huminity = data.main.huminity;
//         const windSpeed = data.wind.speed;
//         const icon = data.weather[0].icon;
//         const description = data.weather[0].description;
//         console.log(description);

//         document.querySelector('#weatherInfo').innerHTML = 
//         `<p class="temp">The temperature in ${name} is: ${temperature}°C</p>
//         <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="system icon">
//         <p>${description}</p>
//         `
//     })
//     .catch(error => console.log(error))
// }