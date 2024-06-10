import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default function App() {
    const [darkMode, setDarkMode] = React.useState(true)
    
    function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode)
    }
    
    return (
        <div className="container">
            <Navbar 
                darkMode={darkMode} // can write {toggleDarkMode}
                toggleDarkMode={toggleDarkMode} // not needed
            />
            <Main darkMode={darkMode} />
        </div>
    )
}