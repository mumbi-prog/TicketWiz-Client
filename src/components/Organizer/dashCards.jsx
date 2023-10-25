import React from "react";

const cardItems = [
  {
    title: "Total Events",
    subtitle: "14",
  },
  {
    title: "Total Tickets Sold",
    subtitle: "223",
  },
  {
    title: "Total Revenue",
    subtitle: "Ksh.61990",
  },
];

const ResponsiveCards = () => {
  return (
    <div className="flex flex-wrap justify-left ml-10">
      {cardItems.map((item, idx) => (
        <div className="max-w-xs mx-4 mb-8">
          <div className="bg-gray-300 hover:bg-blue-500 rounded-lg shadow-lg transition duration-300 ease-in-out">
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2 hover:text-white">
                {item.title}
              </h2>
              <p className="text-gray-600 hover:text-white">{item.subtitle}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResponsiveCards;
