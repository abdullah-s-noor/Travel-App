const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use(express.static('dist'));
const { calculateDiffDays } = require('./calculateDiffDays');// Import a custom utility to calculate date differences
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const PIXABAY_API_KEY = process.env.PIXABAY_API_KEY;
const GEONAMES_USERNAME = process.env.GEONAMES_USERNAME;
// Endpoint to handle weather data requests
app.post('/api/weather', async (req, res) => {
  const { city, date } = req.body;// Destructure city and date from the request body
  const diffDays = calculateDiffDays(date);// Calculate the difference in days from today to the given date
  if (diffDays<0) {
      return res.status(400).json({ error: "date cannot be in the past" });
      // Return an error status 400 that mean input is invalid ( the date is in the past)
    }

     // Return an error if the city is not found in the Geonames API response
  const geoResponse = await axios.get(`http://api.geonames.org/searchJSON?q=${city}&maxRows=1&username=${GEONAMES_USERNAME}`);
    if (!geoResponse.data.totalResultsCount) {
      return res.status(404).json({ error: "City not found" });// Return an error status 400 that mean not found ( city not found)
    }  
    
    // Destructure longitude, latitude, and name from the API response
    const { lng, lat, toponymName: name } = geoResponse.data.geonames[0];
    // Determine which weather API endpoint to call (current weather or forecast)
    const weatherURL = diffDays < 1 ?
      `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lng}&units=M&key=${WEATHER_API_KEY}` :
      `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lng}&units=M&days=${diffDays}&key=${WEATHER_API_KEY}`;
    const weatherResponse = await axios.get(weatherURL);
    
    
    
  // Respond with the weather data and city information
    res.json({
      weatherData: weatherResponse.data.data,
      city: name,
      diffDays
    });
});
// Endpoint to handle image requests based on the city name
app.post('/api/image', async (req, res) => {
  const { city } = req.body;
  const imageResponse = await axios.get(`https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${city}&image_type=photo`);
  const imageUrl = imageResponse.data.hits[0]?.webformatURL || 'https://www.shutterstock.com/image-vector/no-sign-icon-mobile-concept-600nw-2236399885.jpg';
  //if the image not found in pixabay put this url image   https://www.shutterstock.com/image-vector/no-sign-icon-mobile-concept-600nw-2236399885.jpg
  res.json({ imageUrl });
});


const port = 8000;

// Only listen on the port if not in test mode
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

module.exports = app;//this is for test mode 