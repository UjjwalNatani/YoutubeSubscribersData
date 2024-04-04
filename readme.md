Subscribers Management System
Welcome to the Subscribers Management System project! This is a simple Node.js application integrated with MongoDB, designed to manage subscriber records efficiently.

Overview
The Subscribers Management System provides a platform to perform CRUD (Create, Read, Update, Delete) operations on subscriber data. It allows users to:

Retrieve a list of all subscribers.
Get a list of subscribers with only their names and subscribed channels.
Fetch a specific subscriber by ID.
Components
The project consists of the following components:

App.js: Handles request and response logic, defining routes for interacting with subscriber data.
Index.js: Connects to the MongoDB database and starts the server.
CreateDatabase.js: A script to set up the MongoDB database and populate it with sample subscriber data.
Models/subscribers.js: Defines the schema for subscriber data in MongoDB.
Data.js: Contains sample subscriber data to be inserted into the database.
Setup Instructions
To run the project locally, follow these steps:

Install MongoDB and Node.js on your system.
Clone this repository to your local machine.
Install dependencies by running npm install.
Run node src/createDatabase.js to set up the database and insert sample data.
Start the server by running node src/index.js.
Access the defined endpoints (/subscribers, /subscribers/names, /subscribers/:id) to interact with the application.
Technologies Used
Node.js
Express.js
MongoDB
Contributing
Contributions are welcome! If you'd like to contribute to this project, please fork the repository, make your changes, and submit a pull request.