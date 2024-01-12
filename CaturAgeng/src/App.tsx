import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import InformationDetails from './components/InformationDetails.tsx';
import WeatherInformation from './components/WeatherInformation.tsx';
import CombinedDetails from './components/CombinedDetails.tsx';

interface WeatherData {
  current: {
    temp_c: number;
    condition: {
      text: string;
    };
    is_day: number;
    wind_mph: number;
    wind_dir: string;
    humidity: number;
    vis_miles: number;
    pressure_mb: number;
  };
  location: {
    name: string;
    localtime: string;
  };
}

function App() {
  const [city, setCity] = useState('Jakarta');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const apiURL = `https://api.weatherapi.com/v1/current.json?key=c8529f5caf4c40549c980210241001&q=${city}&aqi=no`;

  useEffect(() => {
    fetch(apiURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error');
        }
        return response.json();
      })
      .then((data: WeatherData) => {
        console.log(data);
        setWeatherData(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [city]);

  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <div className="w-1/5 bg-blue-500 p-4 text-white">
          <ul className="space-y-4">
            <li>
              <Link to="/WeatherInformation">Weather Information</Link>
            </li>
            <li>
              <Link to="/InformationDetails">InformationDetails</Link>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4">
          <Routes>
            <Route
              path="/WeatherInformation"
              element={
                weatherData ? (
                  <WeatherInformation
                    setCity={setCity}
                    stats={{
                      temp: weatherData.current.temp_c,
                      condition: weatherData.current.condition.text,
                      isDay: weatherData.current.is_day,
                      location: weatherData.location.name,
                      time: weatherData.location.localtime,
                    }}
                  />
                ) : (
                  <Navigate to="/InformationDetails" />
                )
              }
            />
            <Route
              path="/InformationDetails"
              element={
                weatherData ? (
                  <>
                    <h2 className="text-2xl font-bold mb-4">
                      Today's Information
                    </h2>
                    <CombinedDetails
                      setCity={setCity}
                      weatherStats={{
                        temp: weatherData.current.temp_c,
                        condition: weatherData.current.condition.text,
                        isDay: weatherData.current.is_day,
                        location: weatherData.location.name,
                        time: weatherData.location.localtime,
                      }}
                      informationStats={[
                        {
                          title: 'Wind Status',
                          value: weatherData.current.wind_mph,
                          unit: 'mph',
                          direction: weatherData.current.wind_dir,
                        },
                        {
                          title: 'Humidity',
                          value: weatherData.current.humidity,
                          unit: '%',
                        },
                        {
                          title: 'Visibility',
                          value: weatherData.current.vis_miles,
                          unit: 'miles',
                        },
                        {
                          title: 'Air Pressure',
                          value: weatherData.current.pressure_mb,
                          unit: 'mb',
                        },
                      ]}
                    />
                  </>
                ) : (
                  <Navigate to="/WeatherInformation" />
                )
              }
            />


            <Route path="*" element={<Navigate to="/WeatherInformation" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
