import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginButton from "./components/LoginButton.jsx";
import WeatherPage from "./pages/WeatherPage.jsx";
import Protected from "./components/Protected.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginButton />} />

        <Route
          path="/weather"
          element={
            <Protected>
              <WeatherPage />
            </Protected>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
