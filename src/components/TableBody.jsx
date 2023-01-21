import {useState, useEffect} from "react" // Importing hooks from React library
import TableRow from "./TableRow"; // Importing TableRow component

const TableBody = () => {
    const [flights,setFlights]=useState(null) // Initializing state variable "flights" with null value and setter function "setFlights"

    const getFlights = () => {
        // Fetching flight data from the specified endpoint
        fetch('http://localhost:8000/flights')
            .then(response => response.json())
            .then(flights => setFlights(Object.values(flights.data))) // Updating state variable "flights" with the fetched data
            .catch(err => console.log(err)) // Logging error if fetch fails

    }

    useEffect(()=>getFlights(),[]) // Calling "getFlights" function when the component is rendered for the first time

    console.log(flights) // Logging the current value of "flights" state variable
    return(
        <tbody>
        {flights?.map((flight,_index) => (
            <TableRow key={_index}flight={flight} /> // Rendering TableRow component for each flight in the "flights" state variable
        ))}

        </tbody>
    )
}

export default TableBody // Exporting the TableBody component
