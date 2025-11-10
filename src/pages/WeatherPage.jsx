import { useEffect, useState } from "react";
import WeatherCard from "../components/WeatherCard.jsx";
import { useAuth0 } from "@auth0/auth0-react";

export default function WeatherPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    getAccessTokenSilently({
      authorizationParams: { audience: import.meta.env.VITE_AUTH0_AUDIENCE }
    })
      .then((token) =>
        fetch(`${import.meta.env.VITE_API_BASE}/api/weather`, {
          headers: { Authorization: `Bearer ${token}` },
        })
      )
      .then((res) => res.json())
      .then((data) => {
        // backend now: City, Weather, Temperature
        const mapped = (Array.isArray(data) ? data : []).map((x) => ({
          city: x.City,
          description: x.Weather,
          temp: x.Temperature,
          // If you extend backend, these will flow into cards/modals automatically:
          pressure: x.Pressure,
          humidity: x.Humidity,
          visibilityKm: x.VisibilityKm,
          windSpeed: x.WindSpeed,
          windDeg: x.WindDeg,
          sunrise: x.Sunrise,
          sunset: x.Sunset,
          tempMin: x.TempMin,
          tempMax: x.TempMax,
        }));
        setItems(mapped);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [getAccessTokenSilently]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-semibold mb-4 text-white">Weather App</h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((it, idx) => (
          <WeatherCard key={idx} {...it} />
        ))}
      </div>
    </div>
  );
}
