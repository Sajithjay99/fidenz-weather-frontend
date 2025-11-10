import { useEffect, useState } from "react";
import WeatherCard from "../components/WeatherCard.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../components/LogoutButton.jsx";
import "../../src/App.css";

export default function WeatherPage() {
  const [items, setItems] = useState([]);
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    getAccessTokenSilently({
      authorizationParams: { audience: import.meta.env.VITE_AUTH0_AUDIENCE },
    })
      .then((token) =>
        fetch(`${import.meta.env.VITE_API_BASE}/api/weather`, {
          headers: { Authorization: `Bearer ${token}` },
        })
      )
      .then((res) => res.json())
      .then((data) => {
        const mapped = (Array.isArray(data) ? data : []).map((x) => ({
          city: x.City,
          description: x.Weather,
          temp: x.Temperature,
        }));
        setItems(mapped);
      })
      .catch(() => {});
  }, [getAccessTokenSilently]);

  return (
    <div className="min-h-screen p-6 background relative">
      <div className="absolute top-4 right-6">
        <LogoutButton />
      </div>

      <h1 className="text-2xl font-semibold mb-4 text-white">Weather App</h1>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item, index) => (
          <WeatherCard
            key={index}
            city={item.city}
            description={item.description}
            temp={item.temp}
          />
        ))}
      </div>
    </div>
  );
}
