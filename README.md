# Airport-Flight-Display-System

This is a Project about Airport Flight Display System that uses React for the frontend, Node.js for the backend, and a Datastax Astra DB (built on Apache Cassandra) for the database. The REST API is used for communication between the frontend and backend, allowing the user to retrieve flight information from the database and display it in the frontend. 

# Prerequisites
- Make sure to create [Datastax Astra DB](https://astra.datastax.com/b7631def-8b59-47a6-bc88-b67486f364ec) account



# Installation
- Clone this respository
- Create a **'.env'** file in the root directory and add the following environment variables:
   - **'URL'**: URL for REST API Endpoint for DataStax Astra service.
   - **'TOKEN'**: used to authenticate with the DataStax Astra REST API endpoint.<br>
- To install the required packages, you can run the following command in your terminal:<br>
    <br>`npm i axios express cors dotenv nodemon`<br>
    This will install  npm packages "axios", "express", "cors", "dotenv", and "nodemon" which are used for making HTTP requests, creating web servers, handling cross-origin resource sharing, managing environment variables, and automatically restarting the server when changes are made to the code, respectively. <br> 
  
    You can also try running the following command to install the react-scripts package:
    <br>`npm install react-scripts `<br>
    
# How to Run

Once you have install all the required pakages you need to run it in two different terminal for backend and frontend.

To run the frontend, use the following command:

**`npm run start:frontend`**

To run the backend, use the following command:

**`npm run start:backend`**

<ins>**Image of the Output**</ins> 
![Screenshot from 2023-01-21 12-16-54](https://user-images.githubusercontent.com/93368036/213887826-7fd9f4fe-0c0b-4226-97cc-0c096f829d03.png)

