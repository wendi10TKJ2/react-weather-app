import "./style.css";

const WeatherData = ({ weatherData, setWeatherData, setShowForm }) => {
  if (!weatherData) return;

  const { location, current, forecast } = weatherData;

  return (
    <div className="weather-data">
      <header>
        <i
          onClick={() => {
            setShowForm(true);
            setWeatherData(null);
          }}
          className="ri-arrow-left-s-line"
        ></i>
        <h4>Weather app</h4>
      </header>
      <div className="weather-data-display">
        <div className="temp_weather_info">
          <img
            style={{ width: "90px" }}
            src={current?.condition?.icon}
            alt={current?.condition?.text}
          />
          <h1>{current?.temp_c}&#8451;</h1>
          <h4>{current?.condition?.text}</h4>
          <div className="address-info">
            <i className="ri-map-pin-line"></i>
            <span>
              {location?.name},{location?.country}
            </span>
          </div>
          <div className="forecast-grid-item">
            {forecast &&
              forecast?.forecastday?.map((item, index) => {
                const { day } = item;
                return (
                  <div key={index} className="forecast-item">
                    <img src={day.condition.icon} alt="icon" />
                    <div className="desc">
                      <h4>{Math.floor(day.maxtemp_c)}&#8451;</h4>
                      <h5>{day.condition.text}</h5>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="sub_weather_info">
          <div className="temperature-info">
            <i className="ri-temp-cold-line"></i>
            <div className="temperature-sub-info">
              <h5>{Math.floor(current?.feelslike_c)}&#8451;</h5>
              <h6>Feels Like</h6>
            </div>
          </div>
          <div className="humadity-info">
            <i className="ri-contrast-drop-fill"></i>
            <div className="temperature-sub-info">
              <h5>{current?.humidity}%</h5>
              <h6>Humadity</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherData;
