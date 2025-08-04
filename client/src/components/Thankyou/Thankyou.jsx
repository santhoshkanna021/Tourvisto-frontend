import React from "react";
import bg from "/public/confitte.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { destinations } from "../../data/destinations";
import { useState, useEffect } from "react";

const Thankyou = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {id} = location.state || {};
  

  const handleBack = () => {
    navigate("/Homepage");
  };



  const handleViewTrip = () => {
    navigate(`/trip/${id}`);
  };
  
  return (
    <>
      {/* Thank You Page */}
      <div
        className="flex items-center flex-col bg-[#EAECF0] justify-center mt-20 w-screen h-126 relative z-10"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <img src="/check.svg" alt="check" className="w-16 h-16" />
            <h1 className="text-2xl text-black font-bold">Thank You & Welcome Aboard!</h1>
            <p className="text-sm text-black font-light">
              Your trip’s booked — can’t wait to have you on this
              <br />
              adventure! 🌍️ Get ready to explore & make memories.✨
            </p>

            <button 
              onClick={handleViewTrip}
              className="bg-blue-600 text-white px-8 py-2 rounded-md mt-1"
            >
              <span className="text-sm font-semibold flex gap-2 items-center">
                View trip details
              </span>
            </button>

            <button
              onClick={handleBack}
              className="bg-white text-black px-6 py-2 rounded-md"
            >
              <span className="text-sm font-bold flex gap-2 items-center">
                <img src="/Frame (1).svg" alt="home" className="w-4 h-4" />
                Return to homepage
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Thankyou;
