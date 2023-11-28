import React, {Component} from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Navbar from "./Navbar/Navbar"
import Home from "./Component/Home"
import About from "./Component/About"
import Contact from "./Component/Contact"

const App=()=>{
    return <div>
        <Router>
            <Navbar/>
            <Switch>
                <Route path="/home" Component={Home} />
                <Route path="/about" Component={About} />
                <Route path="/contact" Component={Contact} /> 
            </Switch>
        </Router>
     
    </div>
}
export default App