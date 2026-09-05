// Configuration
const API_KEY = 'YOUR_6867d508bf56038b0ec607b2728ca1f7'; // Get your key from https://openweathermap.org/api
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5';
const STORAGE_KEY = 'savedLocations';

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const currentWeatherSection = document.getElementById('currentWeather');
const forecastContainer = document.getElementById('forecast');
const savedLocationsList = document.getElementById('savedLocationsList');
const currentDateElement = document.getElementById('currentDate');

// State
let currentCity = null;
let savedLocations = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

// Event Listeners
searchBtn.addEventListener('click', handleSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSearch();
});

// Initialize
function init() {
    displaySavedLocations();
    if (savedLocations.length > 0) {
        fetchWeather(savedLocations[0]);
    }
    updateCurrentDate();
}

// Search Handler
function handleSearch() {
    const city = searchInput.value.trim();
    if (city) {
        fetchWeather(city);
        searchInput.value = '';
    }
}

// Fetch Weather Data
async function fetchWeather(city) {
    try {
        showLoading();
        
        const currentResponse = await fetch(
            `${API_BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        
        if (!currentResponse.ok) {
            throw new Error('City not found');
        }
        
        const currentData = await currentResponse.json();
        currentCity = currentData;
        
        // Fetch 5-day forecast
        const forecastResponse = await fetch(
            `${API_BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`
        );
        const forecastData = await forecastResponse.json();
        
        displayCurrentWeather(currentData);
        displayForecast(forecastData);
        addToSavedLocations(city);
        
    } catch (error) {
        showError(error.message);
    }
}

// Display Current Weather
function displayCurrentWeather(data) {
    const { name, main, weather, wind, sys } = data;
    const { temp, feels_like, humidity, pressure } = main;
    const { description, icon } = weather[0];
    
    document.getElementById('cityName').textContent = `${name}, ${sys.country}`;
    document.getElementById('temp').textContent = Math.round(temp);
    document.getElementById('weatherDescription').textContent = description;
    document.getElementById('feelsLike').textContent = `${Math.round(feels_like)}°C`;
    document.getElementById('humidity').textContent = `${humidity}%`;
    document.getElementById('windSpeed').textContent = `${wind.speed} m/s`;
    document.getElementById('pressure').textContent = `${pressure} hPa`;
    document.getElementById('weatherIcon').src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    document.getElementById('weatherIcon').alt = description;
}

// Display 5-Day Forecast
function displayForecast(data) {
    const forecastList = data.list.filter(item => item.dt_txt.includes('12:00:00')).slice(0, 5);
    
    forecastContainer.innerHTML = forecastList.map(day => {
        const date = new Date(day.dt * 1000);
        const icon = day.weather[0].icon;
        const temp = Math.round(day.main.temp);
        const description = day.weather[0].description;
        
        return `
            <div class="forecast-card">
                <p>${date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</p>
                <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}">
                <p class="temp">${temp}°C</p>
                <p>${description}</p>
            </div>
        `;
    }).join('');
}

// Add to Saved Locations
function addToSavedLocations(city) {
    if (!savedLocations.includes(city)) {
        savedLocations.push(city);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(savedLocations));
        displaySavedLocations();
    }
}

// Remove from Saved Locations
function removeLocation(city) {
    savedLocations = savedLocations.filter(loc => loc !== city);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedLocations));
    displaySavedLocations();
}

// Display Saved Locations
function displaySavedLocations() {
    if (savedLocations.length === 0) {
        savedLocationsList.innerHTML = '<p>No saved locations yet. Search for a city to add one!</p>';
        return;
    }
    
    savedLocationsList.innerHTML = savedLocations.map(city => `
        <div class="location-card" onclick="fetchWeather('${city}')">
            <h4>${city}</h4>
            <p>Click to view details</p>
            <button class="remove-btn" onclick="event.stopPropagation(); removeLocation('${city}')">Remove</button>
        </div>
    `).join('');
}

// Show Error
function showError(message) {
    currentWeatherSection.innerHTML = `
        <div class="error-message">
            <strong>Error:</strong> ${message}
        </div>
    `;
    forecastContainer.innerHTML = '';
}

// Show Loading
function showLoading() {
    currentWeatherSection.innerHTML = `
        <div class="loading">
            <div class="spinner"></div>
        </div>
    `;
}

// Update Current Date
function updateCurrentDate() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date().toLocaleDateString('en-US', options);
    currentDateElement.textContent = today;
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', init);
