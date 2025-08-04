import { Link } from "react-router-dom";

const TripCard = ({ trip }) => {
  const {
    id,
    name,
    price,
    title,
    Location,
    thumbnail = "https://via.placeholder.com/300x200?text=Trip+Image", // fallback image
  } = trip;

  return (
    <Link
      to={`/trip/${id}`}
      className="block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-400"
    >
      <div className="relative">
        <img
          src={thumbnail}
          alt={name}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        <span className="absolute top-3 right-3 bg-white text-gray-800 font-semibold px-3 py-1 text-sm rounded-full shadow">
          ${price}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-900 line-clamp-2">
          {title}
        </h3>
        <h3 className="font-light text-lg text-gray-900 line-clamp-2">
          {Location}
        </h3>
      </div>
    </Link>
  );
};

export default TripCard;
