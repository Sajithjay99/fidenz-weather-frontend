# Weather App Frontend

This is the frontend of the **Fidenz Full Stack Weather Application** built with **React + Vite + Tailwind CSS**.  
It integrates with the backend API and Auth0 for secure authentication and displays real-time weather data.

---

## Features
- Auth0 login & logout (with MFA enabled)
- Protected routes (user must log in)
- Responsive design (mobile & desktop)
- Secure API calls using Bearer Token

---

## Technologies
- React (Vite)
- Tailwind CSS
- Auth0 React SDK
- Fetch API for backend requests

---

## Setup Instructions
1. **Clone the repository**
   ```bash
   git clone https:https://github.com/Sajithjay99/fidenz-weather-frontend.git
   cd weather-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a `.env` file** in the project root:
   ```env
    VITE_API_BASE=http://localhost:3000
    VITE_AUTH0_DOMAIN=dev-gk8papjykz6fewug.us.auth0.com
    VITE_AUTH0_CLIENT_ID=K1xLVl8E4IvTW87s6vmXzsrAWR2RI0MR
    VITE_AUTH0_AUDIENCE=https://weather.api
   ```

4. **Run the app**
   ```bash
   npm run dev
   ```

---

## Developer
**Sajith Jayasooriya**
