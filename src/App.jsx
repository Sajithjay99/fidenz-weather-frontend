import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import WeatherPage from "./pages/WeatherPage.jsx";
import Protected from "./components/Protected.jsx";
import LoginButton from "./components/LoginButton.jsx";
import LogoutButton from "./components/LogoutButton.jsx";

 

export default function App() {
  return (
    <BrowserRouter>
      <div  >
        <LoginButton />
         
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <Protected>
              <WeatherPage />
            </Protected>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
