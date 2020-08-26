import React, { useState, useEffect } from "react";
import axios from 'axios';

import { IBuildingData } from '../../../types/AppInterfaces';
import phoneIcon from "../../../assets/icons/phone.svg"
import cursorIcon from "../../../assets/icons/cursor.svg"
import layerIcon from "../../../assets/icons/layer.svg";
import charIcon from "../../../assets/icons/chair.svg";
import workIcon from "../../../assets/icons/work.svg";


function BuildingData(props: any) {
    const [data, setData] = useState<IBuildingData>({});

    useEffect(() => {
        axios('https://localhost:5001/api/v1/Home/Buildings/'+props.building).then(
            res => {
                const responseData = res.data;
                setData({
                    title: responseData.name, 
                    description: responseData.description,
                    address: responseData.address,
                    phone: responseData.phoneNumber1,
                    totalFloors: responseData.totalFloors, 
                    totalSeats: parseInt(responseData.totalBusySeats) + parseInt(responseData.totalAvailableSeats),
                    availableSeats: responseData.totalAvailableSeats
                });
            }
        );
    }, [props.building]);

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