document.getElementById('get-weather-btn').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    const apiKey = '41de4b1c2f64a266039bdb00040b6faa';  // înlocuiește cu API key-ul tău de la OpenWeatherMap
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('city').textContent = data.name;
            document.getElementById('weather-description').textContent = data.weather[0].description;
            document.getElementById('temperature').textContent = `${data.main.temp}°C`;

            const icon = data.weather[0].icon;
            document.getElementById('weather-icon').innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`;
        })
        .catch(error => console.error('Error fetching the weather data:', error));
});
