import { useAuth0 } from "@auth0/auth0-react";
import "../../src/App.css";
 


const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <>
      <div className="w-full h-screen background flex flex-col justify-center items-center">
        <div className="w-[400px] h-[400px] backdrop-blur-3xl flex flex-col justify-center items-center rounded-lg shadow-lg">

 <img src="../../src/assets/logo.png" alt="logo" className="w-[100px] h-[100px]"/>
          <div className="m-3 text-center ">
            <h1 className="text-3xl font-bold mb-4 text-white font-medium">Welcome to Weather App</h1>
          </div>
          <button 
          onClick={() => loginWithRedirect()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer w-[95px]">
            Log In
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginButton;
