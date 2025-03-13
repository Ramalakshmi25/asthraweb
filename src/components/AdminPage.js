import React, { useState } from "react";

const AdminPage = () => {
  const events = [
    "Brain buzz", 
    "THINKOVATION", 
    "UX Revamp Wheel", 
    "Neuro nova",
    "Musical Hunt",
    "Elastic Tower Challenge",
    "Ragasiya Raagam",
    "Dhamsarads"
  ];
  const [searchId, setSearchId] = useState("");
  const [searchEvent, setSearchEvent] = useState("");

  const emptyData = Array(5).fill({ teamName: "", teamMembers: "", dept: "", slot: "" });

  return (
    <div className="flex justify-center items-center min-h-screen w-screen bg-gradient-to-r from-green-600 to-yellow-800 p-5">
      <div className="bg-white bg-opacity-20 backdrop-blur-lg shadow-2xl p-8 rounded-3xl text-white w-full max-w-7xl flex flex-col items-center">
        
        <input
          type="text"
          value="Admin Dashboard"
          className="w-72 p-3 rounded-lg text-blue-900 bg-white bg-opacity-90 outline-none shadow-lg placeholder-gray-600 font-extrabold text-xl text-center uppercase tracking-wide"
          readOnly
        />

        <div className="flex flex-col items-center gap-4 mb-4 mt-5">
          <input
            type="text"
            placeholder="Phone Number"
            className="w-96 p-3 rounded-lg text-black bg-white bg-opacity-90 outline-none shadow-lg placeholder-gray-600 focus:ring-2 focus:ring-blue-400"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
          />
          
          <input
            type="text"
            placeholder="Event Name"
            className="w-72 p-3 rounded-lg text-black bg-white bg-opacity-90 outline-none shadow-lg placeholder-gray-600 focus:ring-2 focus:ring-blue-400"
            value={searchEvent}
            onChange={(e) => setSearchEvent(e.target.value)}
          />
          
          <button 
            className="w-40 bg-gradient-to-r from-green-500 to-yellow-600 text-white font-bold px-4 py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:from-green-700 hover:to-yellow-800">
            Search
          </button>
        </div>

        {events.map((eventName, idx) => (
          <div key={idx} className="bg-white bg-opacity-30 p-5 rounded-lg mt-6 shadow-lg overflow-x-auto w-full">
            <h2 className="text-xl font-bold text-white mb-4">{eventName}</h2>
            <table className="w-full text-black text-sm md:text-base font-semibold border-collapse border border-white">
              <thead>
                <tr className="border-b-2 border-white text-left bg-white bg-opacity-20">
                  <th className="py-3 px-4 border border-white">TEAM NAME</th>
                  <th className="py-3 px-4 border border-white">TEAM MEMBERS</th>
                  <th className="py-3 px-4 border border-white">DEPT</th>
                  <th className="py-3 px-4 border border-white">SLOT</th>
                </tr>
              </thead>
              <tbody>
                {emptyData.map((_, index) => (
                  <tr key={index} className="border-b border-gray-400 hover:bg-white hover:bg-opacity-40 transition">
                    <td className="py-3 px-4 border border-white"></td>
                    <td className="py-3 px-4 border border-white"></td>
                    <td className="py-3 px-4 border border-white"></td>
                    <td className="py-3 px-4 border border-white"></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;