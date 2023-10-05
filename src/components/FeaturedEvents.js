import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const FeaturedEvents = () => {
  const eventsData = [
    {
      title: "MUSICFEST 2023",
      image:
        "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
      description: "123 Lane, Nakuru",
      date: "4",
      month: "OCT",
      otherDetails: "Other Details 4",
    },
    {
      title: "MUSICFEST 2023",
      image:
        "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
      description: "123 Lane, Nakuru",
      date: "4",
      month: "OCT",
      otherDetails: "Other Details 4",
    },
    {
      title: "MUSICFEST 2023",
      image:
        "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
      description: "123 Lane, Nakuru",
      date: "4",
      month: "OCT",
      otherDetails: "Other Details 4",
    },
    {
      title: "MUSICFEST 2023",
      image:
        "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
      description: "123 Lane, Nakuru",
      date: "4",
      month: "OCT",
      otherDetails: "Other Details 4",
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">
        Featured Events
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {eventsData.map((event, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-40 object-cover"
            />
            <div className="flex">
              <div className="bg-white p-4">
                <span className="text-blue-600 ml-2 font-small text-xs">
                  {event.month}
                </span>
                <br />
                <span className="text-gray-800 ml-2 font-bold text-lg">
                  {event.date}
                </span>
              </div>
              <div className="w-3/4 bg-white text-white p-4">
                <div className="mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {event.title}
                  </h3>
                  <div className="flex items-center">
                    <FaLocationDot className="text-gray-600" />
                    <p className="text-gray-600 ml-2 font-small text-sm">
                      {event.description}
                    </p>
                  </div>
                </div>
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full">
                  Book Ticket
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <button className="bg-white-500 text-sky-400/100 border border-sky-500 px-4 py-2 rounded-full hover:bg-blue-400">
          See More
        </button>
      </div>
    </div>
  );
};

export default FeaturedEvents;
