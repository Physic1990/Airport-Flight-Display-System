// This code is creating a backend server using express
const PORT = 8000 // port number for the server
const axios = require('axios').default // import axios library for making HTTP requests
const express = require('express') // import express for creating server
const cors = require('cors') // import cors for handling cross-origin requests
require('dotenv').config() // import and config dotenv for loading environment variables

const app = express() // create an express application
app.use(cors()) // enable cors middleware for handling cross-origin requests

// create a GET endpoint for flights
app.get('/flights', (req, res) => {
    // create options for axios request
    const options = {
        url: `${process.env.URL}?page-size=6`, // set URL using process.env.URL
        headers: {
            accept: 'application/json',
            'X-Cassandra-Token': process.env.TOKEN // set token using process.env.TOKEN
        }
    }
    axios.request(options) // make axios request
        .then(response => {
            console.log(response.data) // log the response data
            res.json(response.data) // send the response data as json
        })
        .catch(error => {
            console.log(error) // log the error
        })
})

app.listen(PORT, () => console.log(`running on port ${PORT}`)) // start the server on the specified PORT
