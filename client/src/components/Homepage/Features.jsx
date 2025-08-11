import React from "react";
import barcelona from "../../assets/Features img/card-img-1.svg";
import australia from "../../assets/Features img/card-img-3.svg";
import japan1 from "../../assets/Features img/card-img-3.svg";
import japan2 from "../../assets/Features img/card-img-4.svg";
import london from "../../assets/Features img/card-img-5.svg";
import australia2 from "../../assets/Features img/card-img-6.svg";

const destinations = [
  { image: barcelona, title: "Barcelona Tour", rating: "3.5", activities: "196 Activities" },
  { image: australia, title: "Australia Tour", rating: "3.5", activities: "196 Activities" },
  { image: japan1, title: "Japan Tour", rating: "3.5", activities: "196 Activities" },
  { image: japan2, title: "Japan Tour", rating: "3.5", activities: "196 Activities" },
  { image: london, title: "London, United States", rating: "3.5", activities: "196 Activities" },
  { image: australia2, title: "Australia Tour", rating: "3.5", activities: "196 Activities" }
];

const DestinationCard = ({ image, title, rating, activities }) => (
  <div className="relative rounded-xl overflow-hidden shadow-md w-full h-full">
    <img src={image} alt={title} className="w-full h-full object-cover max-w-full" />
    <div className="absolute top-3 left-3 bg-white text-red-500 text-xs px-3 py-1 rounded-full font-semibold shadow">
      {rating}
    </div>
    <div className="absolute bottom-4 left-4 text-white">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-200">{activities}</p>
    </div>
  </div>
);

const Features = () => {
  return (
    <section className="py-10 px-6 bg-[#f8fafc] overflow-hidden">
      <h2 className="text-2xl font-bold text-[#1F1F36] mb-2 ml-12">
        Featured Travel Destinations
      </h2>
      <p className="text-[#7F7E83] ml-12">
        Check out some of the best places you can visit around the world.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-12">
        {/* Left Side (2/3 width) */}
        <div className="md:col-span-2 flex flex-col gap-6">
          {/* Large top card */}
          <div className="h-[328px]">
            <DestinationCard {...destinations[0]} />
          </div>

          {/* Two smaller cards below */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 h-68">
              <DestinationCard {...destinations[4]} />
            </div>
            <div className="flex-1 h-68">
              <DestinationCard {...destinations[5]} />
            </div>
          </div>
        </div>

        {/* Right Side (1/3 width) */}
        <div className="flex flex-col gap-6">
          <div className="h-48">
            <DestinationCard {...destinations[1]} />
          </div>
          <div className="h-48">
            <DestinationCard {...destinations[2]} />
          </div>
          <div className="h-48">
            <DestinationCard {...destinations[3]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
