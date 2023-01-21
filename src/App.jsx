import Table from './components/Table' // import the Table component

// create the App component
const App = () => {
    return(
        <div className="departures"> {/* create a div element with className of departures */}
            <header>DEPARTURES</header> {/* create a header element with text of DEPARTURES */}
            <Table/> {/* render the Table component */}
        </div>
    )
}

export default App // export the App component
