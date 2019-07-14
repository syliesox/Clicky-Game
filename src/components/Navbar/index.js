import React from "react";
import "./style.css";

const Navbar = (props) => (
    <nav className="navbar shadow fixed-top">
        <div className="container-fluid">
            <h4>Looney Tunes Clicky!</h4>
            <div className="score ml-auto d-flex">
                <h5 id="currentScore">Current Score: {props.currentScore}</h5> 
                <h5 id="topScore">Top Score: {props.topScore}</h5>
            </div>
        </div>
    </nav>
);

export default Navbar;