var inputValue = document.querySelector('#cityInput');
var button = document.querySelector('#btn');
var info = document.querySelector('#weather-info');

btn.addEventListener('click', function () {

    const city = inputValue.value;
    if (city === "") {
        alert("Enter City Name");
    }
    else {
        const key = '3f16756a88766dd645b9f7d074d83dc1'
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`

        const xhr = new XMLHttpRequest();
        xhr.open("GET", apiUrl, true);

        xhr.onload = function () {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);

                const weatherDesc = data.weather[0].description;
                const temp = data.main.temp;
                const windSpeed = data.wind.speed;
                const cityN = data.name;


                const result = `
                <p>The weather in ${cityN} is ${weatherDesc} </p>
                <p>The Temperature is ${(temp - 273.15).toFixed(2)} is °C and the Wind Speed is ${windSpeed} m/s</p>
                `;
                info.innerHTML = result;
            } else {
                console.error("Error: ", xhr.statusText);
                alert("Error occurred while fetching data");
            }
        }
        xhr.send();
    }

})