import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/Homepage");
  };

  return (
    <div className="relative w-full h-screen">
      <img
        src="/bg.svg"
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="flex items-center justify-center w-full h-full relative z-10">
        <div className="w-100 h-60 bg-white rounded-md shadow-md px-6 py-4">
          <div className="flex items-center justify-center mt-2 gap-2">
            <img src="/fi_2200326.svg" alt="logo" className="w-4 h-4" />
            <span className="text-sm text-black font-bold">Tourvisto</span>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="text-sm text-black font-bold mt-5">
              Start Your Travel Journey
            </h1>
            <p className="ml-4 mt-2 text-sm text-black font-light text-center">
              Sign in with Google to explore AI-generated <br />
              itineraries, trending destinations, and more
            </p>

            <button
              onClick={handleLogin}
              className="bg-blue-600 text-white px-4 py-2 rounded-md mt-5 hover:bg-blue-700"
            >
              <span className="text-sm font-bold flex gap-2 items-center">
                <img src="/Social icon.svg" alt="google" className="w-4 h-4" />
                Sign in with Google
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
