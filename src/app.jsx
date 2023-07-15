import React, { useEffect, useState } from "react";
import getData from "./components/apiFetch";
import Card from "./components/Card";
import SunnyDay from "./sunnyDay.jpg";
import Haze from "./Haze.jpg";
import clouds from "./clouds.jpg";
import rain from "./rain.jpg";
import rain2 from "./rain2.jpg";
import surface from "./surface-455120_1280.jpg";
function App() {
  const [weather, setWeather] = useState(null);
  const [city_name, curr_name] = useState("Katni");
  useEffect(() => {
    const fetchData = async () => {
      const data = await getData(city_name);
      setWeather(data);
    };
    fetchData();
  }, [city_name]);
  const enterpressed = (e) => {
    if (e.keyCode === 13) {
      console.log(e.currentTarget.value);
      curr_name(e.currentTarget.value);
    }
  };
  if (weather !== null) {
    console.log(weather);

    const wea_desc = weather.weather[0].description;
    const icon_url =
      "https://openweathermap.org/img/wn/" +
      weather.weather[0].icon +
      "@2x.png";
    const temp = weather.main.feels_like;
    const humidity = weather.main.humidity;
    const pressure = weather.main.pressure;
    const temp_min = weather.main.temp_min;
    const temp_max = weather.main.temp_max;
    const wind = weather.wind.speed;
    const bgImg = weather.weather[0].main;

    let bgImageUrl = "";

    switch (bgImg) {
      case "Clouds":
        bgImageUrl =
          "url('https://upload.wikimedia.org/wikipedia/commons/5/50/Clouds_white_sky.jpg')";
        break;
      case "Clear":
        bgImageUrl = `url(${SunnyDay})`;
        break;
      case "Atmosphere":
        bgImageUrl = `url(${Haze})`;
        break;
      case "Rain":
        bgImageUrl = `url(${rain})`;
        break;
      case "Drizzle":
        bgImageUrl = `url(${surface})`;
        break;
      case "Thunderstorm":
        bgImageUrl =
          "url('https://images.newscientist.com/wp-content/uploads/2019/03/20115708/gettyimages-673747736.jpg')";
        break;
      case "Snow":
        bgImageUrl =
          "url('https://img.freepik.com/premium-photo/beautiful-view-snowfall-ski-slope-surrounded-by-snowy-pine-forest-winter-fairy-tale_332511-706.jpg?w=2000')";
        break;
      default:
        bgImageUrl =
          "https://cdn.mos.cms.futurecdn.net/KtELxmwMbyZzPmPmLBpF2C-1200-80.jpg";
        break;
    }

    const containerStyle = {
      margin: 0,
      backgroundImage: bgImageUrl,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width: "100%",
      height: "100vh",
      backgroundPosition: "center",
    };

    return (
      <div className="container" style={containerStyle}>
        <div className="main_body">
          <div className="grid_container ">
            <div className="box">
              <div className="Search">
                City Name :{" "}
                <input
                  type="text"
                  onKeyDown={enterpressed}
                  placeholder="Katni"
                />
            
              </div>
            </div>
            <div className="middle">
              <div className="boxy">
                <h1>{city_name}</h1>
                <img src={icon_url} className="icon" alt="Imgaine" />
                <p className="temp">{temp} °C</p>
                <p> {wea_desc}</p>
              </div>
            </div>
            {/* <div className="bottom"></div> */}
          </div>
          <div className="bottom">
            <div className="card1">
              <Card name="temp_max" item={temp_max} unit="°C" />{" "}
            </div>
            <div className="card2">
              <Card name="temp_min" item={temp_min} unit="°C" />{" "}
            </div>
            <div className="card3">
              <Card name="temp" item={temp} unit="°C" />
            </div>
            <div className="card4">
              <Card name="wind" item={wind} unit="m/s" />
            </div>
            <div className="card5">
              <Card name="humidity" item={humidity} unit="%" />
            </div>
            <div className="card6">
              <Card name="pressure" item={pressure} unit="hPa" />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default App;
