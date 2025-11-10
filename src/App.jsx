import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import WeatherPage from "./pages/WeatherPage.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WeatherPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
