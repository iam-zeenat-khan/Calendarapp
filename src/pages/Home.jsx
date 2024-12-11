import styles from "../modules/Calendar.module.css";
import { useState } from "react";
import EventAccordion from "../components/EventAccordian";
import Calendar from "../components/Calendar";
import EventDetails from "./EventDetails";

const Home = () => {
  const [activePage, setActivePage] = useState("calendar");

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen p-8">
      {/* Page Title */}
      <h1 className="text-5xl font-extrabold text-center text-white mb-8 drop-shadow-lg">
        Calendar Application
      </h1>

      {/* Toggle between Calendar and Event Details */}
      <div className="flex justify-center my-6 space-x-6">
        <button
          onClick={() => setActivePage("calendar")}
          className={`px-6 py-3 text-lg font-medium rounded-full shadow-xl transition-all transform hover:scale-105 ${
            activePage === "calendar"
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
        >
          Calendar
        </button>
        <button
          onClick={() => setActivePage("eventDetails")}
          className={`px-6 py-3 text-lg font-medium rounded-full shadow-xl transition-all transform hover:scale-105 ${
            activePage === "eventDetails"
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
        >
          Event Details
        </button>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row gap-8 mt-8 items-start">
        {/* Left Section: Calendar */}
        <div className="bg-gray-800 text-white p-6 rounded-xl shadow-2xl flex-1">
          {activePage === "calendar" ? (
            <>
              <h2 className="text-3xl font-semibold mb-4">Your Calendar</h2>
              <Calendar />
            </>
          ) : (
            <EventDetails />
          )}
        </div>

        {/* Right Section: Event Accordion */}
        <div className="bg-gray-800 text-white p-6 rounded-xl shadow-2xl flex-1">
          <h2 className="text-3xl font-semibold mb-4">Event Details</h2>
          <EventAccordion />
        </div>
      </div>

      {/* Footer Information */}
      <footer className="text-center text-gray-400 mt-12">
        <p className="text-lg">
          Tap on any day to add or update events. Keep track of your activities with
          ease!
        </p>
      </footer>
    </div>
  );
};

export default Home;
