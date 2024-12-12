import { memo, useContext, useEffect, useState } from "react";
import { EventContext } from "../context/EventContext";
import { motion } from "framer-motion";
import EventAccordian from "./EventAccordian";

const Calendar = () => {
  const { events, setEvents, addEvent } = useContext(EventContext);

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    details: "",
    startTime: "",
    endTime: "",
  });

  const [selectedDay, setSelectedDay] = useState(null);
  const [clickEvent, setClickEvent] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDayEvents, setSelectedDayEvents] = useState([]);

  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const today = new Date();
  const todayDate = today.getDate();
  const todayMonth = today.getMonth();
  const todayYear = today.getFullYear();
  const eventMon = currentDate.toLocaleString("default", { month: "long" });
  const isCurrentMonthYear = month === todayMonth && year === todayYear;

  const daysArray = [
    ...Array(firstDayOfMonth).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  useEffect(() => {
    if (selectedDay) {
      const dayEvents = events.filter(
        (event) =>
          parseInt(event.date.split(" ")[0], 10) === selectedDay &&
          event.date.includes(eventMon) &&
          event.date.includes(year)
      );
      setSelectedDayEvents(dayEvents);
    }
  }, [selectedDay, events, eventMon, year]);

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const handlePrevYear = () => {
    setCurrentDate(new Date(year - 1, month, 1));
  };

  const handleNextYear = () => {
    setCurrentDate(new Date(year + 1, month, 1));
  };

  const handleClickEvent = (day) => {
    setSelectedDay(day);
    setClickEvent(true);
  };

  const handleCloseForm = () => {
    setClickEvent(false);
    setFormData({
      title: "",
      category: "",
      details: "",
      startTime: "",
      endTime: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedEvent = {
      ...formData,
      date: `${selectedDay} ${eventMon} ${year}`,
    };

    const existingEventIndex = events.findIndex(
      (event) =>
        event.date === updatedEvent.date &&
        event.startTime === updatedEvent.startTime &&
        event.endTime === updatedEvent.endTime
    );

    if (existingEventIndex >= 0) {
      const updatedEvents = [...events];
      updatedEvents[existingEventIndex] = updatedEvent;
      setEvents(updatedEvents);
    } else {
      addEvent(updatedEvent);
    }

    handleCloseForm();
  };

  const handleDeleteEvent = (eventToDelete) => {
    setEvents((prevEvents) =>
      prevEvents.filter((event) => event !== eventToDelete)
    );
  };

  return (
    <div className="min-h-screen flex bg-[#e6f8f3]">
      {/* Left Section */}
      <div className="w-1/3 bg-[#56c596] text-white p-6">
        <div className="mb-4">
          <h1 className="text-4xl font-bold mb-2">{selectedDay || todayDate}</h1>
          <h2 className="text-xl font-medium">
            {selectedDay ? `${eventMon} ${year}` : "Today"}
          </h2>
        </div>
        <ul className="space-y-3">
          {/* {selectedDayEvents.length ? (
            selectedDayEvents.map((event, index) => (
              <li
                key={index}
                className="bg-[#47a386] p-4 rounded-lg shadow-md"
              >
                <p className="font-semibold">{event.title}</p>
                <p>
                  {event.startTime} - {event.endTime}
                </p>
                <button
                  onClick={() => handleDeleteEvent(event)}
                  className="text-red-300 hover:text-red-500 mt-2"
                >
                  Delete
                </button>
              </li>
            ))
          ) : (
            <p className="text-sm">No events for this day</p>
          )} */}
          <EventAccordian/>
        </ul>
        {/* <button
          onClick={() => setClickEvent(true)}
          className="mt-6 bg-[#3c9d7e] py-2 px-4 rounded-md hover:bg-[#2c7b5d]"
        >
          + Add Event
        </button> */}
      </div>

      {/* Right Section */}
      <div className="w-2/3 p-6">
        {/* Calendar Header */}
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={handlePrevYear}
            className="px-3 py-1 bg-[#56c596] text-white rounded-md hover:bg-[#47a386]"
          >
            &lt;&lt;
          </button>
          <button
            onClick={handlePrevMonth}
            className="px-3 py-1 bg-[#56c596] text-white rounded-md hover:bg-[#47a386]"
          >
            &lt;
          </button>
          <h2 className="text-2xl font-bold">
            {eventMon} {year}
          </h2>
          <button
            onClick={handleNextMonth}
            className="px-3 py-1 bg-[#56c596] text-white rounded-md hover:bg-[#47a386]"
          >
            &gt;
          </button>
          <button
            onClick={handleNextYear}
            className="px-3 py-1 bg-[#56c596] text-white rounded-md hover:bg-[#47a386]"
          >
            &gt;&gt;
          </button>
        </div>

        {/* Weekdays */}
        <div className="grid grid-cols-7 text-center font-medium text-gray-600 mb-4">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>

        {/* Days */}
        <div className="grid grid-cols-7 gap-2">
          {daysArray.map((day, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => day && handleClickEvent(day)}
              className={`p-4 rounded-lg text-center cursor-pointer transition-all transform 
                ${index % 7 === 0 || index % 7 === 6 ? "bg-[#ffddc1]" : "bg-[#f4f7f6] hover:bg-[#e6f1ee]"} 
                ${day === todayDate && isCurrentMonthYear ? "ring-4 ring-[#56c596] shadow-lg" : ""} 
                ${day === selectedDay ? "bg-[#56c596] text-white" : ""}`}
            >
              {day}
            </motion.div>
          ))}
        </div>

        {/* Event Form */}
        {clickEvent && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-xl shadow-2xl p-6 w-11/12 max-w-lg">
              <h3 className="text-lg font-bold mb-4 text-gray-800">
                {selectedDay
                  ? `Events for ${selectedDay} ${eventMon} ${year}`
                  : "Create Event"}
              </h3>
              <ul className="mb-4 space-y-2">
                {selectedDayEvents.map((event, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center bg-gray-100 p-3 rounded-md hover:shadow-md transition-shadow"
                  >
                    <span>
                      <strong>{event.title}</strong> ({event.startTime} - {event.endTime})
                    </span>
                    <button
                      onClick={() => handleDeleteEvent(event)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Event Title"
                  className="w-full p-3 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#56c596]"
                  required
                />
                <input
                  type="time"
                  name="startTime"
                  value={formData.startTime}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#56c596]"
                  required
                />
                <input
                  type="time"
                  name="endTime"
                  value={formData.endTime}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#56c596]"
                  required
                />
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="Event Details"
                  className="w-full p-3 rounded-md bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#56c596]"
                ></textarea>
                <div className="flex justify-end space-x-2">
                  <button
                    type="button"
                    onClick={handleCloseForm}
                    className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#56c596] text-white rounded-md hover:bg-[#47a386]"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(Calendar);