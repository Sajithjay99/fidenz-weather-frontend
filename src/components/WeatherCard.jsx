import { useState, useMemo } from "react";

export default function WeatherCard({
  city,
  description,
  temp,
  // optional extras if you pass them later:
  tempMin,
  tempMax,
  pressure,
  humidity,
  visibilityKm,
  windSpeed,
  windDeg,
  sunrise,
  sunset,
}) {
  const [open, setOpen] = useState(false);

  // deterministic gradient per card
  const tone = useMemo(() => {
    const palettes = [
      "from-sky-500 to-sky-600",
      "from-purple-500 to-purple-600",
      "from-emerald-500 to-emerald-600",
      "from-amber-500 to-amber-600",
      "from-rose-500 to-rose-600",
    ];
    const idx = Math.abs((city || "").length) % palettes.length;
    return palettes[idx];
  }, [city]);

  return (
    <>
      {/* Card */}
      <div
        onClick={() => setOpen(true)}
        className="cursor-pointer rounded-xl overflow-hidden shadow-md bg-white"
        title="View details"
      >
        {/* Header colored area */}
        <div className={`bg-gradient-to-br ${tone} p-4 text-white`}>
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold">{city}</h3>
              <p className="text-white/80 text-xs mt-1">9.19am, Feb 8</p>
            </div>
            <span className="text-white/80">×</span>
          </div>

          <div className="mt-4 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
            {/* left: condition */}
            <div className="flex items-center gap-3">
              <span className="text-3xl">⛅</span>
              <span className="capitalize">{description}</span>
            </div>

            {/* divider */}
            <div className="h-12 w-px bg-white/40 justify-self-center" />

            {/* right: temperature + min/max */}
            <div className="text-right">
              <div className="text-3xl md:text-4xl font-semibold">
                {typeof temp === "number" ? Math.round(temp) : temp}°C
              </div>
              <p className="text-white/80 text-sm mt-1">
                Temp Min: {tempMin ?? "—"}°c
              </p>
              <p className="text-white/80 text-sm">
                Temp Max: {tempMax ?? "—"}°c
              </p>
            </div>
          </div>
        </div>

        {/* Footer dark strip */}
        <div className="bg-[#2b2f3a] px-4 py-3 text-sm text-white/90">
          <div className="grid grid-cols-3 gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="opacity-80">Pressure:</span>
                <span>{pressure ? `${pressure}hPa` : "—"}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="opacity-80">Humidity:</span>
                <span>{humidity ? `${humidity}%` : "—"}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="opacity-80">Visibility:</span>
                <span>{visibilityKm ? `${visibilityKm}km` : "—"}</span>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2">
                <span className="opacity-80">Wind:</span>
                <span>{windSpeed ? `${windSpeed}m/s` : "—"}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="opacity-80">Direction:</span>
                <span>{windDeg ? `${windDeg} Degree` : "—"}</span>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2">
                <span className="opacity-80">Sunrise:</span>
                <span>{sunrise ?? "—"}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="opacity-80">Sunset:</span>
                <span>{sunset ?? "—"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute left-1/2 top-1/2 w-[92vw] max-w-4xl -translate-x-1/2 -translate-y-1/2">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              {/* Modal header */}
              <div className="bg-blue-500 text-white p-6">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setOpen(false)}
                    className="opacity-90 hover:opacity-100"
                    aria-label="Back"
                  >
                    ←
                  </button>
                  <h2 className="text-xl font-semibold text-center flex-1 -ml-6">
                    {city ?? "—"}
                  </h2>
                  <div className="w-6" />
                </div>

                <div className="mt-6 grid grid-cols-3 items-center">
                  <div className="flex flex-col items-center">
                    <div className="text-4xl">⛅</div>
                    <p className="mt-3 text-white/90 capitalize">
                      {description ?? "—"}
                    </p>
                  </div>

                  <div className="h-14 w-px bg-white/40 justify-self-center" />

                  <div className="text-center">
                    <div className="text-6xl font-semibold">
                      {typeof temp === "number" ? Math.round(temp) : temp}°c
                    </div>
                    <p className="text-white/80 text-sm mt-3">
                      Temp Min: {tempMin ?? "—"}°c
                    </p>
                    <p className="text-white/80 text-sm">
                      Temp Max: {tempMax ?? "—"}°c
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal metrics */}
              <div className="bg-[#2b2f3a] text-white px-8 py-6">
                <div className="grid gap-6 md:grid-cols-3">
                  <div>
                    <Metric label="Pressure" value={pressure ? `${pressure} hPa` : "—"} />
                    <Metric label="Humidity" value={humidity ? `${humidity}%` : "—"} />
                    <Metric label="Visibility" value={visibilityKm ? `${visibilityKm} km` : "—"} />
                  </div>
                  <div>
                    <Metric label="Wind" value={windSpeed ? `${windSpeed} m/s` : "—"} />
                    <Metric label="Direction" value={windDeg ? `${windDeg} Degree` : "—"} />
                  </div>
                  <div>
                    <Metric label="Sunrise" value={sunrise ?? "—"} />
                    <Metric label="Sunset" value={sunset ?? "—"} />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Metric({ label, value }) {
  return (
    <div className="flex items-center justify-between py-1">
      <span className="text-gray-300">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
