import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { destinations } from '../../data/destinations';


const Stripe = () => {
  const navigate = useNavigate();
  const { id } = useParams();



  const [selectedDestination, setSelectedDestination] = useState({});
  const [isDestinationFound, setIsDestinationFound] = useState(false);

  useEffect(() => {
    if (!id) {
      setIsDestinationFound(false);
      return;
    }

    const destination = destinations.find(trip => trip.id === parseInt(id));
    if (!destination) {
      setIsDestinationFound(false);
      setSelectedDestination({});
    } else {
      setIsDestinationFound(true);
      setSelectedDestination(destination);
    }
  }, [id]);

  const { name, shortname, price, itinerary } = selectedDestination;

  const handlePayment = (e) => {
    e.preventDefault();
    // You can pass trip data to thank you page if needed
    navigate("/thankyou", { state: { id: id } });
  };

  const handleBack = () => {
    // Navigate back to the specific destination page
    navigate(`/trip/${id}`);
  };

  
  

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-white font-sans overflow-hidden">
      {/* Left Section */}
      <div className="w-full md:w-1/2 p-10 flex flex-col justify-start items-center border-r">
        <div className="w-full max-w-md text-center">
          <div className="flex items-center gap-2">
            <img src="/fi_2200326.svg" alt="logo" className="w-6 h-6 ml-13" />
        <span className="text-2xl text-black font-bold mr-20  ">Tourvisto</span>
      </div> 
      <div className='mt-5'>
      <p className="text-gray-600 text-sm mb-5 text-start ml-13">{name}</p>
      <h2 className="text-2xl font-bold text-start mb-5 ml-13">${price}</h2>
      </div>
         

          <img
            src={itinerary?.images?.[0] || "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"}
            alt={name || "Trip image"}
            className="w-1/2 h-48 object-cover rounded-lg mb-4 ml-13"
          />

          <h3 className="text-lg font-medium text-start ml-13 mb-5">{shortname}</h3>
          <p className="text-sm text-gray-500 text-start ml-13 mb-5">{itinerary?.overview}</p>

          <div className="mt-15 text-xs text-gray-400 flex justify-start ml-13 items-center space-x-4">
  <p>
    Powered by <span className="font-bold">Stripe</span>
  </p>
  <a href="#" className="hover:underline">Terms</a>
  <a href="#" className="hover:underline">Privacy</a>
</div>

        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-10">
        <div className="w-full max-w-md">

          {/* Apple Pay Placeholder */}
          <button className="w-full bg-black text-white py-3 rounded-lg font-semibold text-sm mb-6">
             Pay
          </button>

          <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
            <hr className="w-1/4" />
            <span>Or pay with card</span>
            <hr className="w-1/4" />
          </div>

          {/* Payment Form */}
          <form className="space-y-3 text-sm" onSubmit={handlePayment}>
            <div>
              <label htmlFor="email" className="block mb-1">Email</label>
              <input
                id="email"
                type="email"
                className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="card" className="block mb-1">Card Details</label>
              <input
                id="card"
                type="text"
                placeholder="1234 1234 1234 1234"
                className="w-full px-3 py-1.5 border border-gray-300 rounded-md mb-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="MM / YY"
                  className="w-1/2 px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="text"
                  placeholder="CVC"
                  className="w-1/2 px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="cardname" className="block mb-1">Name on card</label>
              <input
                id="cardname"
                type="text"
                placeholder="Name on card"
                className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="country" className="block mb-1">Country or Region</label>
              <select
                id="country"
                className="w-full px-3 py-1.5 border border-gray-300 rounded-md mb-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option>United States</option>
                <option>India</option>
                <option>Japan</option>
                <option>United Kingdom</option>
                <option>Canada</option>
                <option>Australia</option>
              </select>
              <input
                type="text"
                placeholder="ZIP"
                className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#3C4257] hover:bg-blue-700 text-white py-2 rounded-md font-semibold mt-3 text-sm transition-colors"
            >
              Pay ${price}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Stripe;