import React from "react";

const MyEvents = () => {
    const eventsData = [
      {
        title: "MUSICFEST 2023",
        image:
          "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80", // Replace with your image URL
        description: "lorem ipsum dolor sit amet, consectetur adipis",
        date: "4",
        month: "OCT",
        otherDetails: "Other Details 4",
      },
      {
        title: "MUSICFEST 2023",
        image:
          "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80", // Replace with your image URL
        description: "lorem ipsum dolor sit amet, consectetur adipis",
        date: "4",
        month: "OCT",
        otherDetails: "Other Details 4",
      },
      {
        title: "MUSICFEST 2023",
        image:
          "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80", // Replace with your image URL
        description: "lorem ipsum dolor sit amet, consectetur adipis",
        date: "4",
        month: "OCT",
        otherDetails: "Other Details 4",
      },
      {
        title: "MUSICFEST 2023",
        image:
          "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80", // Replace with your image URL
        description: "lorem ipsum dolor sit amet, consectetur adipis",
        date: "4",
        month: "OCT",
        otherDetails: "Other Details 4",
      },
    ];
  return (
    <div className="container mx-auto py-6 sm:py-12 text-left">
         {/* <Greetings username="YourUsername" /> */}
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 p1-4">
        My Events
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ml-4">
        {eventsData.map((event, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-md transform "
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-40 object-cover"
            />
            <div className="flex">
              <div className="bg-white p-2 sm:p-4">
                <span className="text-blue-600 ml-1 sm:ml-2 text-xs sm:text-sm">
                  {event.month}
                </span>
                <br />
                <span className="text-gray-800 ml-1 sm:ml-2 font-bold text-base sm:text-lg">
                  {event.date}
                </span>
              </div>
              <div className="w-3/4 bg-white text-white p-2 sm:p-4">
                <div className="mb-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                    {event.title}
                  </h3>
                  <div className="flex items-center">
                    <p className="text-gray-600 ml-2 text-xs sm:text-sm tablet:text-base">
                      {event.description}
                    </p>
                  </div>
                </div>
                <button
                  className="text-navy-blue hover:underline mx-2 border-none ml-6"
                //   onClick={() => )}
                >
                  Update
                </button>
                <button
                  className="text-navy-blue hover:underline border-none ml-4"
                //   onClick={() => handleDelete(item)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyEvents;
