import React, { memo, useContext } from "react";
import { EventContext } from "../context/EventContext";

const EventItems = memo(({ event, index }) => {
  const {deleteEvent } = useContext(EventContext);
   return (
    <tr
      key={index}
      className={`text-center ${
        index % 2 === 0 ? "bg-[#12192c]" : "bg-[#002147]"
      }`}
    >
      <td className="p-4 sm:p-6 text-white">{index + 1}</td>
      <td className="p-4 sm:p-6 text-white">{event.title}</td>
      <td className="p-4 sm:p-6 text-white">{event.category}</td>
      <td className="p-4 sm:p-6 text-white">{event.date}</td>
      <td className="p-4 sm:p-6 text-white">{event.details}</td>
      <td className="p-4 sm:p-6 text-white">
        <button
          onClick={() => deleteEvent(index)}
          className="bg-black border border-red-500 text-red-500 px-4 sm:px-8 py-2 sm:py-3 rounded-xl transition-all ease-linear hover:bg-red-600 hover:text-white hover:border-white"
        >
          Delete
        </button>
      </td>
    </tr>
  );
});

export default EventItems;
