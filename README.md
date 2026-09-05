# Weather Dashboard

A modern, responsive weather dashboard that fetches real-time weather data from OpenWeatherMap API. Built with vanilla HTML, CSS, and JavaScript.

## Features

✨ **Current Weather Display**
- Real-time temperature, weather description, and conditions
- Feels-like temperature, humidity, wind speed, and pressure
- Weather icons from OpenWeatherMap

📅 **5-Day Forecast**
- Daily weather predictions with temperature and conditions
- Weather icons and descriptions
- Clean card-based layout

💾 **Saved Locations**
- Save your favorite cities for quick access
- Persistent storage using browser's localStorage
- One-click weather viewing

📱 **Responsive Design**
- Mobile-friendly interface
- Works on desktop, tablet, and smartphone
- Optimized for all screen sizes

🎨 **Modern UI**
- Clean and intuitive interface
- Smooth animations and transitions
- Color-coded weather information
- Professional gradient header

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Free OpenWeatherMap API key

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ihvoldinmirzajonov-creator/weather-dashboard.git
   cd weather-dashboard
   ```

2. **Get an API Key:**
   - Go to [OpenWeatherMap](https://openweathermap.org/)
   - Sign up for a free account
   - Navigate to your API keys section
   - Copy your API key

3. **Configure API Key:**
   - Open `script.js`
   - Replace `'YOUR_OPENWEATHERMAP_API_KEY'` with your actual API key:
     ```javascript
     const API_KEY = 'your_api_key_here';
     ```

4. **Open the Application:**
   - Open `index.html` in your web browser
   - Alternatively, use a local server:
     ```bash
     python -m http.server 8000
     # or
     npx http-server
     ```
   - Visit `http://localhost:8000`

## Usage

### Search for a City

1. Enter a city name in the search box
2. Click the "Search" button or press Enter
3. View the current weather and 5-day forecast
4. The city is automatically saved to your favorites

### View Saved Locations

1. Scroll to the "Saved Locations" section
2. Click on any saved city to view its weather
3. Click "Remove" to delete a city from your list

### Local Time Display

The dashboard displays the current date and updates automatically.

## Project Structure

```
weather-dashboard/
├── index.html          # Main HTML file
├── styles.css          # Styling and responsive design
├── script.js           # JavaScript functionality
├── config.example.json # Configuration example
├── README.md           # This file
└── LICENSE             # License information
```

## API Reference

This project uses the **OpenWeatherMap API**:

- **Endpoint:** `https://api.openweathermap.org/data/2.5`
- **Current Weather:** `/weather?q={city}&appid={API_KEY}&units=metric`
- **Forecast:** `/forecast?q={city}&appid={API_KEY}&units=metric`

**Free Tier Limits:**
- 60 calls/minute
- 1,000 calls/day

For more details, visit [OpenWeatherMap Documentation](https://openweathermap.org/api)

## Technology Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6+)
- **API:** OpenWeatherMap REST API
- **Storage:** Browser localStorage
- **Styling:** Custom CSS with CSS Grid and Flexbox

## Browser Compatibility

- Chrome ✅
- Firefox ✅
- Safari ✅
- Edge ✅
- Opera ✅

## Features to Implement

- [ ] Geolocation support
- [ ] Multiple temperature unit toggles (Celsius/Fahrenheit)
- [ ] Weather alerts and notifications
- [ ] Historical weather data
- [ ] Air quality index
- [ ] UV index information
- [ ] PWA (Progressive Web App) support
- [ ] Dark mode theme
- [ ] Multi-language support

## Known Limitations

- Free API tier has rate limits
- Requires internet connection
- API key needed for deployment

## Performance Tips

1. Minimize API calls by caching data
2. Use reasonable update intervals
3. Optimize images (weather icons are already optimized)
4. Lazy load saved locations

## Troubleshooting

### "City not found" Error
- Check the city spelling
- Use English city names
- Try with country code (e.g., "London, UK")

### Weather data not loading
- Verify your API key is correct
- Check your internet connection
- Ensure you're not exceeding API rate limits
- Check browser console for error messages

### Saved locations not persisting
- Check if localStorage is enabled in your browser
- Clear browser cache and try again
- Check browser privacy settings

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For issues or questions, please open a GitHub Issue in the repository.

## Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for the weather API
- Weather icons provided by OpenWeatherMap
- Inspired by modern weather applications

## Author

**ihvoldinmirzajonov-creator**

---

**Happy weather tracking!** ⛅
