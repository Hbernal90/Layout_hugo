import React from "react";
import phoneIcon from "../../../assets/icons/phone.svg"
import cursorIcon from "../../../assets/icons/cursor.svg"
const data = {
    title: "Punto Sao Paulo",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus earum aperiam aut cupiditate impedit, minima praesentium, architecto perspiciatis corrupti soluta tempora quasi possimus? Itaque, facere? Harum provident suscipit beatae quaerat.",
    address: "Av. de las Américas 1545, Providencia, 44630 Guadalajara, Jal.",
    phone: "33 333 3333",
    totalFloors: 3,
    totalSeats: 150,
    availableSeats: 50
}

function BuildingData(props: any) {
    return (
        <React.Fragment>
            <span className="title">{data.title}</span>
            <span className="description">{data.description}</span>
            <div className="iconAndText"><img src={cursorIcon} alt="" /> <span>{data.address}</span></div>
            <div className="iconAndText"><img src={phoneIcon} alt="" /><span>{data.phone}</span></div>
            <hr />
            <span className="seatsInfo">Total floors: {data.totalFloors}</span>
            <span className="seatsInfo">Total seats: {data.totalSeats}</span>
            <span className="seatsInfo">Available seats: {data.availableSeats}</span>
        </React.Fragment>
    )
}

export default BuildingData;