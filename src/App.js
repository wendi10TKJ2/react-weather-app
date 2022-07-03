import { useState, useEffect } from "react";
import { WeatherForm, WeatherData } from "./components";
import axios from "axios";

const baseURL = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}`;

function App() {
  const [showForm, setShowForm] = useState(true);
  const [weatherData, setWeatherData] = useState(null);
  const [alert, setAlert] = useState({ isOpen: false, msg: "" });

  async function handleInputCall(e) {
    if (e.keyCode === 13) {
      try {
        const { data } = await axios.get(
          `${baseURL}&q=${e.target.value}&days=7`
        );
        setWeatherData(data);
        setShowForm(false);
      } catch (err) {
        const {
          response: { data },
        } = err;
        setAlert({ isOpen: true, msg: data.error.message });
      }
    }
  }

  async function handleCallWeatherApi(e) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const {
        coords: { latitude, longitude },
      } = position;
      const { data } = await axios.get(
        `${baseURL}&q=${latitude},${longitude}&days=7`
      );
      setWeatherData(data);
    });

    setShowForm(false);
  }

  return (
    <div className="App">
      {showForm ? (
        <WeatherForm
          alert={alert}
          setAlert={setAlert}
          handleInputCall={handleInputCall}
          handleCallWeatherApi={handleCallWeatherApi}
        />
      ) : (
        <WeatherData
          setShowForm={setShowForm}
          setWeatherData={setWeatherData}
          weatherData={weatherData}
        />
      )}
    </div>
  );
}

export default App;
