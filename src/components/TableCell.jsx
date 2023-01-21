import TableLetter from "./TableLetter"; // Importing TableLetter component

const TableCell = ({word}) => { // Destructuring the "word" prop

    return(
        <td>
            {Array.from(word).map((letter,index) => (
                <TableLetter key = {index} letter = {letter} index={index}/> // Rendering TableLetter component for each letter in the word
            ))}
        </td>
    )
}

export default TableCell // Exporting the TableCell component
