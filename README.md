# React Calendar App

## Overview

This is a fully functional, responsive calendar application built with React. It allows users to view, add, edit, and delete events on a monthly calendar. The application uses React Context for state management, localStorage for data persistence, and Tailwind CSS for styling. Additionally, the application includes memoization for performance optimization.

## Features

- **Responsive Design:** The application is fully responsive, adapting to various screen sizes, including mobile devices.
- **Add, Edit, Delete Events:** Users can easily manage their events with the provided CRUD operations.
- **Event Search & Filter:** Allows users to search for events by title and filter them by category.
- **LocalStorage Integration:** Events are stored in localStorage, ensuring data persistence across sessions.
- **Optimized Rendering:** The use of `React.memo` in critical components minimizes unnecessary re-renders, improving performance.

## Components

- **Calendar Component:** Displays the monthly calendar view and handles event rendering.
- **EventAccordion Component:** Displays the event details in an accordion view, enhancing the user experience.
- **EventDetails Page:** Shows a detailed list of all events with search and filter options.
- **EventItems Component:** Handles individual event rendering in a table within the EventDetails page.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **React Context API:** Used for state management across the application.
- **Tailwind CSS:** A utility-first CSS framework for styling.
- **Vite:** A fast build tool for development.
- **LocalStorage:** Used for persisting event data across sessions.

## Initialization

1. Clone the repository:

   ```bash
   git clone https://github.com/Mohammad-Jamal/react-calendar-app.git
   cd react-calendar-app
   ```
## Installation

1. **Install dependencies:**

   ```bash
   npm install
   npm run dev
   ```
1. **Run application:**

   ```bash
   npm run dev
   ```
3. **Open your browser and navigate to http://localhost:5173**

## Deployment

The application is deployed on Vercel. You can access the live version here: [React Calendar App](https://your-vercel-link.vercel.app)

## Usage

- **Adding Events:** Click on the "Add Event" button and fill in the form to add a new event.
- **Editing Events:** Click on an event in the calendar to edit its details.
- **Deleting Events:** Use the "Delete" button in the event details view to remove an event.

## Optimizations

- **Memoization:** The `Calendar` and `EventAccordion` components are wrapped with `React.memo` to prevent unnecessary re-renders.
- **Responsive Design:** Tailwind CSS classes have been used extensively to ensure the application is fully responsive.
- **Error Handling:** Basic error handling has been implemented to ensure a smooth user experience.

## Future Enhancements

- **Event Reminders:** Implementing notifications for upcoming events.
- **Improved Styling:** Enhancing the UI/UX with more custom designs and animations.

## Contributions

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

