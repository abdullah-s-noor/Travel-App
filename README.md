### Udacity Travel App
### Overview
The Travel App is a web application designed to help users plan trips by providing real-time weather forecasts and relevant images for their chosen destination. By integrating with third-party APIs such as Geonames, Weatherbit, and Pixabay, the app allows users to enter a city and departure date to retrieve current or forecasted weather data and visual imagery of the location. Built with modern web technologies like Node.js, Express, Webpack, and SCSS, the app offers a responsive and user-friendly interface. It is designed to ensure a seamless experience across devices, providing valuable travel insights and making trip planning easier and more informative.

#### node version:v18.16.1

### Technologies Used:
Node.js: The back-end is built with Node.js, providing an efficient and scalable environment for handling API requests.
Express: A lightweight web framework used to create routes and manage requests to external APIs.
Webpack: Used to bundle and optimize front-end assets, making sure the app runs efficiently in production.
SCSS: Used for styling the front-end, with responsiveness managed through media queries.
Jest: Unit testing is implemented to ensure that core functions work as expected.
### Features
Fetches real-time travel data and weather forecasts
User-friendly interface for entering trip details
Integration with external APIs to provide up-to-date information
Built with modern JavaScript, CSS, and HTML

### Project Goals:
Provide a user-friendly platform to plan trips by offering weather forecasts and relevant images for the destination city.
Ensure responsive design and a smooth user experience across devices.
Integrate reliable third-party APIs to fetch real-time data and handle user requests efficiently.

### APIs
APIs Integrated:
Geonames API: Provides city coordinates (latitude and longitude) based on user input.
Weatherbit API: Fetches current or forecasted weather based on the city and selected trip date.
Pixabay API: Retrieves images of the destination city, adding a visual aspect to the travel information.
### dependencies
axios: A promise-based HTTP client for making requests, often used to interact with APIs.
clean-webpack-plugin: A Webpack plugin that cleans up the output directory before each build to remove old or unused files.
core-js: A library that provides polyfills for JavaScript features, ensuring compatibility with older browsers.
cors: A middleware for enabling Cross-Origin Resource Sharing (CORS), allowing your server to handle requests from different origins.
dotenv: A module that loads environment variables from a .env file into process.env, useful for managing configuration like API keys.
express: A minimal and flexible web framework for Node.js, used to build web servers and APIs.
nodemon: A tool that automatically restarts the Node.js server whenever changes are detected, improving the development workflow.
valid-url: A utility for validating URLs, ensuring that user input contains properly formatted URLs.
webpack: A module bundler used to compile JavaScript modules and other assets into a single bundle, optimizing the front-end code for the browser.
webpack-cli: A command-line interface for Webpack, allowing you to run and configure Webpack tasks.
workbox-webpack-plugin: A Webpack plugin for generating service workers, helping with caching strategies and improving the performance of web applications.
### Installing
you need the following:
npm install ----> to install all the required dependencies
notice: you may still need to download the nodeomon as a dependency



## testing
The command npm install --save-dev supertest jest is used to install two libraries, supertest and jest
'npm run test' will run jest in the terminal and get you the results

