// Main function to handle form submission and data fetching
import { clearInputs } from "./clearInputs";
const handleSubmit = async (e) => {
    e.preventDefault();
    const city = document.querySelector('#city').value;
    const date = document.querySelector('#date').value;
// Simple validation to ensure both fields are filled
    if (!city || !date) {
        alert('Make sure you enter the region and date.');
        return;
    }
 // Fetch weather data from the server API
    const weatherResponse = await fetch('/api/weather', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ city, date })// Send city and date as JSON
    });

    const weatherResult = await weatherResponse.json();
      // Check if the request was successful
    if (!weatherResponse.ok) {
        alert(weatherResult.error);// Display error message if response is not OK
        clearInputs();// Clear the input fields
        return;
    } 
    // Destructure the result to extract needed values
    const { weatherData, city: cityName, diffDays } = weatherResult;
    // Fetch image data from the server API using POST method with city name sent as JSON
    const imageResponse = await fetch('/api/image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ city: cityName })
    });
    // Convert the image response to JSON format 
    const imageResult = await imageResponse.json();
    const imageUrl = imageResult.imageUrl;//get image url
       // Call the function to display weather and image data
    displayWeatherData(weatherData, cityName, date, diffDays, imageUrl);
    // Clear the input fields after successful operation
    clearInputs();
};

function displayWeatherData(weatherData, cityName, date, diffDays, imageUrl) {
    let data = `<h2>Trip info</h2>`;
    data += `<p>Trip to ${cityName} on ${date}</p>`;

    if (diffDays < 1) {// Display current weather if the trip is today
        const currentWeather = weatherData[0];
        data += `<p>Temperature: ${currentWeather.temp}°C (Feels like: ${currentWeather.app_temp}°C)</p>`;
        data += `<p>Wind Speed: ${currentWeather.wind_spd} m/s</p>`;
        data += `<p>Weather: ${currentWeather.weather.description}</p>`;
    } else {// Display future weather forecast if the trip is in the future
        const forecastWeather = weatherData[weatherData.length - 1];
        data += `<p>Min Temp: ${forecastWeather.min_temp}°C, Max Temp: ${forecastWeather.max_temp}°C</p>`;
        data += `<p>Feels Like Min Temp: ${forecastWeather.app_min_temp}°C, Feels Like Max Temp: ${forecastWeather.app_max_temp}°C</p>`;
        data += `<p>Wind Speed: ${forecastWeather.wind_spd} m/s</p>`;
        data += `<p>Weather: ${forecastWeather.weather.description}</p>`;
    }
    // Add city image below weather data

    data += `<div class="image-cover">
        <img src="${imageUrl}" alt="City Image">
    </div>`;
    
    document.getElementById('trip_info').innerHTML = data;
    document.getElementById("trip_info").style.display = "block";
}
export{
    handleSubmit
}
