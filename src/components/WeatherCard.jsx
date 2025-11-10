export default function WeatherCard({ city, description, temp }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <h3 className="text-lg font-medium">{city}</h3>
      <p className="text-gray-600 capitalize">{description}</p>
      <p className="mt-2 text-xl font-semibold">{temp} °C</p>
    </div>
  );
}
