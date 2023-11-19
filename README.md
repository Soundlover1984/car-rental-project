# Car Rental Application

This is a web application for a car rental company in Ukraine.

The application allows users to browse and rent cars.

It consists of three main pages:

Home:
The home page contains a general description of the services provided by the company. The design and style of this page are created for user convenience.

Catalog:
The catalog page displays a list of cars available for rent. Users can filter cars by brand, hourly rental price, and mileage. Initially, 12 advertisements are displayed on the page, and more can be loaded by clicking the "Load More" link.

Favorites:
The favorites page displays advertisements that users have added to their favorites list. Users can add or remove advertisements from their favorites. The page also retains the user's favorite advertisements even after refreshing the page.

# Technical Details

The application is developed using React and React Router for routing. It uses its own API based on Mockapi.io to manage advertisements. The API includes the following fields for each advertisement: id, year, make, model, type, img, description, fuelConsumption, engineSize, accessories, functionalities, rentalPrice, rentalCompany, address, rentalConditions, and mileage.

The application includes the following functionality:

Users can browse and filter advertisements in the catalog.
Users can add advertisements to their favorites list.
Users can view detailed information about each advertisement in a modal window.
The modal window can be closed by clicking the "x" button, clicking outside the modal window, or pressing the "Esc" key.
Users can contact the car rental company by clicking the "Rent a Car" link, which provides the company's phone number: +380730000000.
Additional Features

The application also includes additional features:

Filtering: Users can filter advertisements by car brand, hourly rental price, and mileage range.
Pagination: The catalog page uses pagination to display a limited number of advertisements per page.
User Interaction: The application provides feedback to users when they add or remove advertisements from their favorites list.
Interface Improvement: The interface is designed for visual appeal and user convenience.

# Usage

To run the application locally, follow these steps:

Clone the repository to your local computer.
Navigate to the project directory in your terminal.
Execute the command npm install to install the necessary dependencies.
Execute the command npm start to start the development server.
Open a web browser and go to http://localhost:3000 to use the application.
Deployment

The application is deployed on GitHub Pages at https://github.com. You can access it online here: https://github.com/Soundlover1984/car-rental-project.

Enjoy exploring and renting cars using our car rental application!





