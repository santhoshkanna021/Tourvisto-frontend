import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { destinations } from '../../data/destinations';
import TripCard from '../Homepage/TripCard';

const DestinationPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedDestination, setSelectedDestination] = useState(null);

  useEffect(() => {
    if (!id) return;
    const destination = destinations.find(trip => trip.id === parseInt(id, 10));
    setSelectedDestination(destination || null);
  }, [id]);

  if (!selectedDestination) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-semibold text-gray-600">Trip not found</h2>
      </div>
    );
  }

  const { name, shortname, rating, price, itinerary, weather, Daycount, Location } = selectedDestination;

  const handleBack = () => navigate("/Homepage");
  const handleClickJoinTrip = () => navigate(`/stripe/${id}`);

  return (
    <div className="w-full min-h-screen bg-gray-100 overflow-x-hidden">
      <div className="pt-20 px-6 md:px-20 pb-10 container mx-auto">
        {/* Back button */}
        <button onClick={handleBack} className="text-black mb-4">← Go back</button>

        {/* Title and details */}
        <div className="flex flex-col md:flex-row md:items-center mb-8 gap-5">
          <h1 className="text-2xl font-bold">{name}</h1>
          <div className="flex flex-row gap-10 text-gray-600">
            <p>{Daycount}</p>
            <p>{Location}</p>
          </div>
        </div>

        {/* Images & Rating */}
        <div className="flex flex-col md:flex-row gap-4 mb-6 max-w-5xl">
          {itinerary?.images?.[0] && (
            <img
              src={itinerary.images[0]}
              alt={name}
              className="w-full md:w-1/2 h-52 object-cover rounded-lg"
            />
          )}
          <div className="flex-1">
            <div className="grid grid-rows-2 gap-2 mb-4">
              {itinerary?.images?.slice(1).map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${name} ${index + 1}`}
                  className="h-24 w-full object-cover rounded-lg"
                />
              ))}
            </div>
            <div className="flex flex-col mt-4">
              <div className="flex items-center">
                <span className="text-yellow-500">★★★★★</span>
                <span className="ml-2 text-gray-600">{rating}/5</span>
              </div>
              <span className="mt-1 text-gray-500">{itinerary?.reviews} reviews</span>
            </div>
          </div>
        </div>

        {/* Itinerary */}
        <div className="mb-8 max-w-4xl">
          <div className="flex flex-row items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">{shortname}</h1>
            <h1 className="text-xl font-semibold">${price}</h1>
          </div>
          <p className="text-gray-600 mb-4">{itinerary?.overview}</p>

          {itinerary?.days && (
            <div className="mt-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Day-wise Itinerary</h2>
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

        {/* Best Time to Visit */}
        {weather?.bestTime && (
          <div className="mt-6 max-w-4xl">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Best Time to Visit</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {weather.bestTime.map((time, i) => (
                <li key={i}>{time}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Weather Info */}
        {weather?.info && (
          <div className="mt-6 max-w-4xl">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Weather Information</h2>
            <ul className="text-gray-700 space-y-1">
              {weather.info.map((info, i) => (
                <li key={i}>{info}</li>
              ))}
            </ul>
          </div>
        )}

        {/* CTA */}
        <div className="my-6 max-w-4xl">
          <button
            onClick={handleClickJoinTrip}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg w-full"
          >
            Pay and Join Trip – ${price}
          </button>
        </div>

        {/* Popular Trips */}
        <section className="py-4">
          <h2 className="text-2xl font-bold text-[#1F1F36] mb-10">Popular Trips</h2>
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
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
