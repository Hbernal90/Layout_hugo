import React, { useState, useEffect } from "react";
import axios from 'axios';

import { IBuildingData } from '../../../types/AppInterfaces';
import phoneIcon from "../../../assets/icons/phone.svg"
import cursorIcon from "../../../assets/icons/cursor.svg"
import layerIcon from "../../../assets/icons/layer.svg";
import charIcon from "../../../assets/icons/chair.svg";
import workIcon from "../../../assets/icons/work.svg";


const defaultData: IBuildingData = {
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus earum aperiam aut cupiditate impedit, minima praesentium, architecto perspiciatis corrupti soluta tempora quasi possimus? Itaque, facere? Harum provident suscipit beatae quaerat.",
    phone: "33 333 3333"
}

function BuildingData(props: any) {
    const [data, setData] = useState<IBuildingData>(defaultData);

    useEffect(() => {
        axios('https://localhost:5001/api/v1/Home/Buildings').then(
            res => {
                console.log(res.data);
                const responseData = res.data[0];
                setData({
                    ...data,
                    title: responseData.name, address: responseData.description,
                    totalFloors: responseData.totalFloors, totalSeats: responseData.totalBusySeats,
                    availableSeats: responseData.totalAvailableSeats
                })
            }
        );
    }, []);

    return (
        <React.Fragment>
            <span className="title">{data.title}</span>
            <span className="description">{data.description}</span>
            <div className="iconAndText"><img src={cursorIcon} alt="" /> <span>{data.address}</span></div>
            <div className="iconAndText"><img src={phoneIcon} alt="" /><span>{data.phone}</span></div>
            <hr />
            <div className="seatsWrapper">
                <div className="iconAndText"><img src={layerIcon} alt="" /><span>Total floors: {data.totalFloors}</span></div>
                <div className="iconAndText"><img src={workIcon} alt="" /><span>Total seats: {data.totalSeats}</span></div>
                <div className="iconAndText"><img src={charIcon} alt="" /><span>Available seats: {data.availableSeats}</span></div>
            </div>
        </React.Fragment>
    )
}

export default BuildingData;