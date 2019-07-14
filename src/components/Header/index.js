import React from "react";
import "./style.css";

const Header = (props) => (
    <div className="header-container" style={{marginTop: 100}}>
        <h3>Click on a Looney Tunes character below to earn points!</h3>
        <h3>But don't click on the same image more than once!</h3>
    </div>
);

export default Header;