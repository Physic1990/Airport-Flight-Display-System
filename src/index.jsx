import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css' // import css file to style the application
import App from './App' // import the App component

// create a root container using ReactDOM.createRoot method
const root = ReactDOM.createRoot(document.getElementById('root'));

// render the App component within the root container
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)