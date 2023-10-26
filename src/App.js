import React, { useState } from 'react';
import './App.css';

const API_KEY = 'e3bf78681ce33e1effc0fde06d376a2f';
const weatherImages = {
  '01d': 'https://cdn.pixabay.com/photo/2018/08/06/22/55/sun-3588618_1280.jpg',
  '02d': 'https://media.istockphoto.com/id/1455131689/photo/white-clouds-and-sun-with-sunlight-on-blue-sky.webp?b=1&s=612x612&w=0&k=20&c=iEoO8lz6G0qCgdkL12c_-U-uIAiPrOflNhI3QN_Uujo=',
  '03d': 'https://media.istockphoto.com/id/1028827352/photo/sky.webp?b=1&s=612x612&w=0&k=20&c=ELMxphq89_GyKemlVmY-bue8FlKh7uAcSe0dltUTH1k=',
  '04d': 'https://images5.alphacoders.com/123/thumbbig-1231475.webp',
  '09d': 'https://cdn.pixabay.com/photo/2021/08/14/05/33/raindrop-6544618_1280.jpg',
  '10d': 'https://media.istockphoto.com/id/1461681027/photo/rain-over-the-green-forest-carpathian-foggy-mountain-hills-rainy-day-in-summer.webp?b=1&s=612x612&w=0&k=20&c=iIdllsfGEPrXV6LfZwGitnql4gMH15FuHfIFj3wZQCs=',
  '11d': 'https://cdn.pixabay.com/photo/2017/08/01/22/38/flash-2568381_1280.jpg',
  '13d': 'https://cdn.pixabay.com/photo/2017/08/02/14/26/winter-landscape-2571788_1280.jpg',
  '50d': 'https://cdn.pixabay.com/photo/2018/08/21/23/29/forest-3622519_1280.jpg',
  '01n': 'https://cdn.pixabay.com/photo/2018/08/06/22/55/sun-3588618_1280.jpg',
  '02n': 'https://media.istockphoto.com/id/1455131689/photo/white-clouds-and-sun-with-sunlight-on-blue-sky.webp?b=1&s=612x612&w=0&k=20&c=iEoO8lz6G0qCgdkL12c_-U-uIAiPrOflNhI3QN_Uujo=',
  '03n': 'https://media.istockphoto.com/id/1028827352/photo/sky.webp?b=1&s=612x612&w=0&k=20&c=ELMxphq89_GyKemlVmY-bue8FlKh7uAcSe0dltUTH1k=',
  '04n': 'https://images5.alphacoders.com/123/thumbbig-1231475.webp',
  '09n': 'https://cdn.pixabay.com/photo/2021/08/14/05/33/raindrop-6544618_1280.jpg',
  '10n': 'https://media.istockphoto.com/id/1461681027/photo/rain-over-the-green-forest-carpathian-foggy-mountain-hills-rainy-day-in-summer.webp?b=1&s=612x612&w=0&k=20&c=iIdllsfGEPrXV6LfZwGitnql4gMH15FuHfIFj3wZQCs=',
  '11n': 'https://cdn.pixabay.com/photo/2017/08/01/22/38/flash-2568381_1280.jpg',
  '13n': 'https://cdn.pixabay.com/photo/2017/08/02/14/26/winter-landscape-2571788_1280.jpg',
  '50n': 'https://cdn.pixabay.com/photo/2018/08/21/23/29/forest-3622519_1280.jpg',
  // Add more weather condition codes and corresponding image URLs as needed
};

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
      if (response.ok) {
        const data = await response.json();
        setWeather(data);
        setError(null);
      } else {
        setError('City not found. Please enter a valid city name.');
        setWeather(null);
      }
    } catch (error) {
      console.error('Error fetching weather data: ', error);
      setError('Error fetching weather data. Please try again later.');
      setWeather(null);
    }
  };

  let weatherImage = null;
  if (weather && weather.weather && weather.weather[0] && weather.weather[0].icon) {
    const weatherCode = weather.weather[0].icon;
    const imageUrl = weatherImages[weatherCode];
    if (imageUrl) {
      weatherImage = <img src={imageUrl} alt="Weather" />;
    } else {
      weatherImage = <p>No image available for this weather condition.</p>;
    }
  }

  return (
    <div className="App">
       
       <div class="wrapper">
		<span>{weatherImage}</span>
		<span>{weatherImage}</span>
		<span>{weatherImage}</span>
		<span>{weatherImage}</span>
		<span>{weatherImage}</span>
		<span>{weatherImage}</span>
		<span>{weatherImage}</span>
		<span>{weatherImage}</span>
		<span>{weatherImage}</span>
		<span>{weatherImage}</span>
</div>
<div className='main'>
<h1 className="h1">Weather App</h1>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeatherData}>Get Weather</button>
     
      {error && <p className="error-message">{error}</p>}

      {weather && !error && (
        <div className="weather-info">
          <h2>{weather.name}</h2>
          <p>{weather.weather[0].description}</p>
          <p>Temperature: {Math.round(weather.main.temp - 273.15)}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
          {/* {weatherImage} */}
        </div>
      )}
       </div>
    </div>
  );
}

export default App;
