import React from "react";
import "./style.css";

const Navbar = (props) => (
    <nav class="navbar shadow">
        <h4>Looney Tunes Clicky!</h4>
        <div class="score ml-auto d-flex">
            <h5 id="currentScore">Current Score: {props.currentScore}</h5> 
            <h5 id="topScore">Top Score: {props.topScore}</h5>
        </div>
    </nav>
);

export default Navbar;