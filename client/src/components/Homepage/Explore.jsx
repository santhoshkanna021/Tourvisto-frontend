import React, { useEffect, useState } from "react";
import TripCard from "./TripCard";
import { destinations as destinationsData } from "../../data/destinations"; // renamed to avoid conflict

const TripsGrid = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load hardcoded data
    setDestinations(destinationsData);
    setLoading(false);
  }, []);

  const uniqueDestinations = Array.from(
    new Map(destinations.map((trip) => [trip._id || trip.id, trip])).values()
  );

  if (loading) {
    return <p className="text-center mt-10">Loading trips...</p>;
  }

  return (
    <section className="py-6 px-6 bg-[#f8fafc]">
      <h2 className="text-2xl font-bold text-[#1F1F36] mb-2 ml-13">Handpicked Trips</h2>
      <p className="text-[#7F7E83] ml-13">
        Browse well-planned trips designed for different travel styles and interests
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-9">
        {uniqueDestinations.map((trip) => (
          <TripCard key={trip._id || trip.id} trip={trip} />
        ))}
      </div>

      <div className="relative w-full mt-3 mb-7">
        <div className="flex justify-between items-center w-full">
          <button className="px-4 py-2 rounded-full border text-black hover:bg-blue-500 transition ml-10">
            ← Previous
          </button>
          <button className="px-4 py-2 rounded-full border text-black hover:bg-blue-500 transition mr-10">
            Next →
          </button>
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex space-x-2">
          {[1, 2, 3, 4, 5, 6].map((page) => (
            <button
              key={page}
              className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium transition hover:bg-blue-500 hover:text-white"
            >
              {page}
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="py-7 px-15 bg-[#f8fafc] flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/fi_2200326.svg" alt="logo" className="w-6 h-6" />
          <span className="text-2xl text-black font-bold">Tourvisto</span>
        </div>
        <div className="flex flex-row text-right gap-5">
          <h1 className="text-sm font-light text-black">Terms & Conditions</h1>
          <h1 className="text-sm font-light text-black">Privacy Policy</h1>
        </div>
      </div>
    </section>
  );
};

export default TripsGrid;
