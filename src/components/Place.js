import React from "react";

function Place(props) {
    return (
        <div className = "place-card">
            <img src={props.item.imageUrl} />
            <div className = "place-info">
                <p>{props.item.location}<span>View on Google Maps</span></p>
                <h4>{props.item.title}</h4>
                <p>{props.item.startDate} - {props.item.endDate}</p>
                <p>{props.item.description}</p>
            </div>
        </div>
    )
}

export default Place