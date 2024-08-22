# Driver Management System

A simple React-based application to manage driver profiles. Users can create, edit, delete, and view detailed information about drivers. The application features routing for navigating between pages, storing driver data locally in the browser, and displaying driver profiles as cards.

## Features

- **Create Driver:** Users can add new drivers with necessary attributes like name and phone number.
- **View Drivers:** All drivers are listed on the home page as clickable cards.
- **Driver Details:** Clicking on a driver card navigates to a detailed view of the driver.
- **Edit Driver:** Users can edit driver details.
- **Delete Driver:** Users can delete a driver from the list.
- **Search Functionality:** Users can search drivers by name or phone number (optional to implement).

## Tech Stack

- **React:** A JavaScript library for building user interfaces.
- **React Router:** A library for handling routing in React applications.
- **Vite:** A fast build tool and development server for modern web projects.
- **LocalStorage:** Used for persisting driver data locally in the browser.

## Getting Started

### Prerequisites

Make sure you have the following installed on your local machine:

- **Node.js** (v14.0.0 or higher)
- **npm** (v6.0.0 or higher) or **yarn** (v1.22.0 or higher)

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/driver-management-system.git
   cd driver-management-system
2. **Instillation**
   list of commands for frontend:
   npm i
   npm create vite@latest
   npm i axios cors
   npm i react-router-dom

   list of commands for backend:
   npm i
   npm i express
   npm i mongosh
3. **To run frontend:**
   npm run dev
4. **To run backend:**
   nodemon index.js
