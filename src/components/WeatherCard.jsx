import { useState, useMemo } from "react";

export default function WeatherCard({ city, description, temp }) {
  const [open, setOpen] = useState(false);

  const tone = useMemo(() => {
    const palettes = [
      "from-sky-500 to-sky-600",
      "from-purple-500 to-purple-600",
      "from-emerald-500 to-emerald-600",
      "from-amber-500 to-amber-600",
      "from-rose-500 to-rose-600",
    ];
    if (!city) return palettes[0];
    const index = city.length % palettes.length;
    return palettes[index];
  }, [city]);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="cursor-pointer rounded-xl overflow-hidden shadow-lg bg-gray-900 transition-transform hover:scale-105"
        title="View details"
      >
        <div className={`bg-gradient-to-br ${tone} p-5 text-white`}>
          <div className="flex items-center justify-between">
            <h3 className="text-lg md:text-xl font-semibold">{city}</h3>
            <span className="text-white/70">ⓘ</span>
          </div>

          <div className="mt-3 flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <div className="flex items-center gap-3">
              <span className="text-3xl sm:text-4xl">⛅</span>
              <span className="capitalize text-base sm:text-lg">
                {description}
              </span>
            </div>
            <div className="text-3xl sm:text-4xl font-bold mt-3 sm:mt-0">
              {typeof temp === "number" ? Math.round(temp) : temp}°C
            </div>
          </div>
        </div>

        <div className="bg-gray-900 px-4 py-3 text-sm text-gray-100 border-t border-gray-800">
          <div className="flex items-center justify-between">
            <span className="text-gray-400">City</span>
            <span className="font-medium">{city}</span>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
          />
          <div className="relative bg-blue-500 text-white rounded-2xl shadow-2xl w-[90%] max-w-md sm:max-w-lg p-6 text-center">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 left-4 text-white text-xl hover:opacity-80"
            >
              ←
            </button>

            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">{city}</h2>
            <div className="text-6xl mb-3">⛅</div>
            <p className="capitalize mb-2 text-lg">{description}</p>
            <p className="text-4xl sm:text-5xl font-bold">
              {typeof temp === "number" ? Math.round(temp) : temp}°C
            </p>
          </div>
        </div>
      )}
    </>
  );
}
