import {useState} from "react"; // Importing useState hook from React library

const TableLetter = ({letter,index}) => {
    const [flip, setFlip] = useState(false) // Initializing state variable "flip" with false value and setter function "setFlip"

    setTimeout(() => {
        setFlip(true) // Updating the "flip" state variable to true after a delay
    },100 * index) // The delay is calculated based on the "index" prop

    return(
        <div className={flip ? 'flip':null} >
            {flip ? letter:null}
        </div>
    )

}

export default TableLetter // Exporting the TableLetter component
