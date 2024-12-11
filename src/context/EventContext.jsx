import { createContext, useEffect, useState } from "react";

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState(() => {
    const localData = localStorage.getItem("events");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events"));
    if (storedEvents) {
      setEvents(storedEvents);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const addEvent = (newEvent) => {
    const eventWithId = { ...newEvent, id: Date.now() }; // Generate unique id using timestamp
    setEvents((prevEvents) => [...prevEvents, eventWithId]);
  };

  const deleteEvent = (id) => {
    setEvents((prevEvents) => {
      const updatedEvents = prevEvents.filter((event) => event.id !== id);
      localStorage.setItem("events", JSON.stringify(updatedEvents));
      return updatedEvents;
    });
  };
  const updateEvent = (updatedEvent) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event
      )
    );
  };

  const deleteAllEvent = () => {
    setEvents([]);
    localStorage.removeItem("events");
  };

  return (
    <EventContext.Provider
      value={{ events, setEvents, addEvent, deleteEvent, deleteAllEvent, updateEvent }}
    >
      {children}
    </EventContext.Provider>
  );
};
