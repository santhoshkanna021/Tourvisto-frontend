import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { destinations } from '../../data/destinations';
import TripCard from '../Homepage/TripCard';

const DestinationPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedDestination, setSelectedDestination] = useState({});
  const [isDestinationFound, setIsDestinationFound] = useState(false);

  useEffect(() => {
    if (!id) return;

    const destination = destinations.find(trip => trip.id === parseInt(id)); // match numeric id

    if (destination) {
      setSelectedDestination(destination);
      setIsDestinationFound(true);
    } else {
      setIsDestinationFound(false);
      setSelectedDestination({}); // reset in case of invalid
    }
  }, [id]);

  const { name, shortname, rating, price, itinerary, weather, Daycount, Location } = selectedDestination;

  const handleBack = () => navigate("/Homepage");
  const handleclickJoinTrip = () => navigate(`/stripe/${id}`);
  const displayName = "User";
  const profilePicture = "/image.png";

  if (!isDestinationFound) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-semibold text-gray-600">Trip not found</h2>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gray-100 overflow-x-hidden">
      {/* Page Content */}
      <div className="pt-20 px-8 md:px-20 pb-10">
        <button onClick={handleBack} className="text-black mb-4">← Go back</button>

        {/* Title and Overview */}
        <div className="flex flex-col items-start mb-8 ml-60 gap-5">
          <h1 className="text-3xl font-bold">{name}</h1>
          <div className="flex flex-row gap-10">
            <p className="text-gray-600 max-w-2xl">{Daycount}</p>
            <p className="text-gray-600 max-w-2xl">{Location}</p>
          </div>
        </div>

        {/* Images and Rating */}
        <div className="w-full flex justify-start ml-60">
          <div className="flex flex-col md:flex-row gap-4 mb-6 w-1/2 max-w-5xl">
            <img
              src={itinerary?.images?.[0]}
              alt={name}
              className="w-full md:w-full h-52 object-cover rounded-lg"
            />
            <div className="flex-1">
              <div className="grid grid-rows-2 gap-2 mb-4">
                {itinerary?.images?.slice(1).map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${name} ${index + 1}`}
                    className="h-25 w-full object-cover rounded-lg"
                  />
                ))}
              </div>
              <div className="flex flex-col mt-10">
                <div className="flex items-center">
                  <span className="text-yellow-500">★★★★★</span>
                  <span className="ml-2 text-gray-600">{rating}/5</span>
                </div>
                <span className="mt-1 text-gray-500">{itinerary?.reviews} reviews</span>
              </div>
            </div>
          </div>
        </div>

        {/* Itinerary Summary */}
        <div className="w-full flex justify-center ml-30">
          <div className="mb-8 w-full max-w-4xl">
            <div className="flex flex-row items-center justify-between mb-4 w-full">
              <h1 className="text-3xl font-bold ml-2">{shortname}</h1>
              <h1 className="text-xl font-semibold mr-80">${price}</h1>
            </div>

            <p className="text-gray-600 max-w-2xl ml-2 mb-4">{itinerary?.overview}</p>

            {itinerary?.days && (
              <div className="mt-6">
                <h2 className="text-xl font-bold mb-4 text-gray-800">Day-wise Itinerary</h2>
                {Object.entries(itinerary.days).map(([day, activities], index) => (
                  <div key={index} className="mb-6">
                    <h3 className="font-semibold text-lg text-blue-600 mb-2">{day}</h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      {activities.map((activity, i) => (
                        <li key={i}>{activity}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Best Time to Visit */}
        {weather?.bestTime && (
          <div className="mt-6 md:mx-20 ">
            <h2 className="text-xl font-bold mb-4 text-gray-800 ml-35">Best Time to Visit</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-35">
              {weather.bestTime.map((time, i) => (
                <li key={i}>{time}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Weather Info */}
        {weather?.info && (
          <div className="mt-6 md:mx-20 ">
            <h2 className="text-xl font-bold mb-4 text-gray-800 ml-35">Weather Information</h2>
            <ul className="text-gray-700 space-y-1 ml-35">
              {weather.info.map((info, i) => (
                <li key={i}>{info}</li>
              ))}
            </ul>
          </div>
        )}

        {/* CTA Button */}
        <div className="mb-10 mt-6 md:mx-20">
          <button
            onClick={handleclickJoinTrip}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg w-full"
          >
            Pay and Join Trip – ${price}
          </button>
        </div>

        {/* Handpicked Trips Section */}
        <section className="py-6 px-6 bg-[#f8fafc]">
          <div
            className="cursor-pointer mb-10"
            
          >
            <h2 className="text-3xl font-bold text-[#1F1F36] mb-10 hover:underline ">
              Popular Trips
            </h2>
          </div>

          <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {destinations.slice(0, 4).map((trip, index) => (
              <TripCard key={index} trip={trip} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DestinationPage;
