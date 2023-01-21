import TableCell from './TableCell' // Importing TableCell component
const TableRow = ({ flight }) => {

    const words = Object.values(flight) // Extracting the values of the flight object and storing them in the "words" variable

    console.log(words) // Logging the "words" variable

    return(
        <tr>
            <td>✈</td>
            {words?.map((word,_index) => (
                <TableCell key={_index} word = {word}/> // Rendering TableCell component for each word in the "words" variable
            ))}
        </tr>
    )
}

export default TableRow // Exporting the TableRow component
