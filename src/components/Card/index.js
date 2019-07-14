import React from "react";
import "./style.css";

let Card = (props) => (
    <div className="buffer" style={{margin: 15}}>
        <div className="card img-fluid img-thumbnail rounded" onClick={props.imageClick}>
                <img
                    id={props.id}
                    alt={props.name}
                    src={require(`${props.image}`)}
                    onClick={() => {
                        props.selectImage(props.id);
                    }}
                />
        </div>
    </div>
);

export default Card;