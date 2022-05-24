import React from "react";
import Navbar from './components/Navbar'
import Place from './components/Place'
import data from './data'
import './App.scss'

function App() {
    const places = data.map(item => {
        return (
            <Place 
                id = {item.id}
                item = {item}
            />
        )
    })

    return (
        <div className = "">
            <Navbar />
            <section className="places-list">
                {places}
            </section>
        </div>
    )
}

export default App