import { memo, useContext, useState } from "react";
import { EventContext } from "../context/EventContext";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchInput from "../components/SearchInput";
import EditEventModal from "./EditEventModal";

const  EventAccordion= () => {
  const { events, deleteAllEvent, deleteEvent, updateEvent } = useContext(EventContext);
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [eventToEdit, setEventToEdit] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleEdit = (event) => {
    setEventToEdit(event);
    setEditModalOpen(true);
  };

  const handleSave = (updatedEvent) => {
    updateEvent(updatedEvent); // Call context method to update the event
    setEditModalOpen(false);
    setEventToEdit(null);
  };

  const filteredEvents = events.filter((event) => {
    return (
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory ? event.category === selectedCategory : true)
    );
  });

  if (events.length === 0)
    return (
      <div>
        <h1 className="text-3xl sm:text-5xl text-green-300 font-bold uppercase">
          No Data Found
        </h1>
      </div>
    );

    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-teal-100 gap-10 p-4 sm:p-10 md:p-20">
        <h1 className="text-3xl sm:text-5xl text-teal-800 font-bold uppercase text-center">
          Event Details
        </h1>
        <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2 sm:py-4 mb-4 font-bold text-lg sm:text-2xl text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent shadow-sm transition-all duration-200"
        >
          <option value={""}>All categories</option>
          <option value={"Work"}>Work</option>
          <option value={"Family"}>Family</option>
          <option value={"Personal"}>Personal</option>
          <option value={"Other"}>Other</option>
        </select>
        <div className="space-y-4 w-full max-w-4xl">
          {filteredEvents.map((event, index) => (
            <div
              key={event.id}
              className="bg-teal-500 text-white rounded-lg shadow-lg overflow-hidden"
            >
              <div
                onClick={() => handleToggle(index)}
                className="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-teal-600 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                  <div className="text-lg font-bold">{event.date}</div>
                  <div className="text-base font-medium">{event.title}</div>
                </div>
                <div className="flex items-center space-x-3">
                  <EditIcon
                    className="cursor-pointer hover:text-yellow-300"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent accordion toggle on edit
                      handleEdit(event);
                    }}
                  />
                  <DeleteIcon
                    className="cursor-pointer hover:text-red-300"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent accordion toggle on delete
                      deleteEvent(event.id); // Pass the correct ID
                    }}
                  />
                </div>
              </div>
              {activeIndex === index && (
                <div className="px-6 py-4 bg-white text-gray-900">
                  <p className="text-sm font-medium">Category: {event.category}</p>
                  <p className="text-sm font-medium">Details: {event.details}</p>
                  <p className="text-sm font-medium">Start Time: {event.startTime}</p>
                  <p className="text-sm font-medium">End Time: {event.endTime}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <button
          onClick={deleteAllEvent}
          className="bg-red-500 text-white font-bold text-lg sm:text-2xl px-6 py-3 rounded-lg transition-all ease-in-out hover:bg-red-700"
        >
          Delete All
        </button>
        {editModalOpen && (
          <EditEventModal
            isOpen={editModalOpen}
            event={eventToEdit}
            onSave={handleSave}
            onClose={() => setEditModalOpen(false)}
          />
        )}
      </div>
    );
};
export default memo(EventAccordion);
