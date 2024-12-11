import Calendar from "./components/Calendar";
//import EventAccordian from "./components/EventAccordian";

const App = () => {
  return (
    <div className="bg-teal-100 min-h-screen">
      {/* Application Header */}
      <header className="text-center mb-8 py-4 bg-teal-500 shadow-md">
        <h1 className="text-4xl font-extrabold text-white drop-shadow-md">
          Calendar Event Application
        </h1>
        <p className="text-lg text-teal-200 mt-2">
          Plan and organize your events effortlessly
        </p>
      </header>

      {/* Main Content */}
      <main className="container mx-auto flex flex-col lg:flex-row gap-10">
        {/* Calendar Section */}
        <section className="bg-white shadow-lg rounded-lg p-6 flex-1">
          <h2 className="text-2xl font-semibold text-teal-800 mb-4">
            Your Calendar
          </h2>
          <Calendar />
        </section>

        {/* Event Accordion Section */}
        {/* <section className="bg-white shadow-lg rounded-lg p-6 flex-1">
          <h2 className="text-2xl font-semibold text-teal-800 mb-4">
            Upcoming Events
          </h2>
          <EventAccordian />
        </section>*/}
      </main> 

      {/* Footer Section */}
      <footer className="text-center text-teal-500 mt-12 py-4 bg-teal-100 border-t border-teal-300">
        <p>&copy; 2024 Calendar Event Application. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
