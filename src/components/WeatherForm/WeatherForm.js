import "./style.css";
import Alert from "../Alert/Alert";

const WeatherForm = ({
  alert,
  setAlert,
  handleCallWeatherApi,
  handleInputCall,
}) => {
  return (
    <div className="weather-form">
      <header>
        <h4>Weather app</h4>
      </header>
      <div className="form">
        {alert.isOpen ? <Alert setAlert={setAlert} alert={alert} /> : null}
        <input
          onKeyUp={(e) => handleInputCall(e)}
          type="text"
          placeholder="find the city"
        />
      </div>
      <div className="divider">
        <div></div>
        <h6>Or</h6>
        <div></div>
      </div>
      <div className="btn">
        <button onClick={handleCallWeatherApi} id="device-location">
          Get Device Location
        </button>
      </div>
    </div>
  );
};

export default WeatherForm;
