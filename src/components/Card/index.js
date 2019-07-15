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
                        props.clickCard(props.index);
                    }}
                />
        </div>
    </div>
);

// Cards to add to friends.json later
// ,
// {
//     "id": 13,
//     "name": "Yosemite Sam",
//     "image": "./images/sam.gif",
//     "clicked": false
// },
// {
//     "id": 14,
//     "name": "Marvin the Martian",
//     "image": "./images/martian.gif",
//     "clicked": false
// },
// {
//     "id": 15,
//     "name": "Foghorn Leghorn",
//     "image": "./images/foghorn.gif",
//     "clicked": false
// }

export default Card;