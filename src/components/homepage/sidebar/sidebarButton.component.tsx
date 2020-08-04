import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { ISidebarButtonOptions } from "../../../types/AppInterfaces";

function SidebarButton({ title, link, className = "", floors = [] }: ISidebarButtonOptions) {

    const floorButtons = floors?.map(floor =>
        <Link to={`${link}/${floor.link}`} className="floorButton">
            <span>{floor.name}</span>
        </Link>
    )

    const [showFloorButtons, setShowFloorButtons] = useState(false);
    var timeout: any;

    function displayFloors() {
        if (timeout == null) {
            setShowFloorButtons(true);
            timeout = setTimeout(() => { setShowFloorButtons(false) }, 2000);
        }
    }

    function keepFloorsActive() {
        clearTimeout(timeout);
        timeout = null;
    }

    function hideFloors() {
        setShowFloorButtons(false);
    }

    return (
        <div className="sidebarButtonWrapper">
            <Link to={link} className={`sidebarButton ${className}`} onMouseOver={displayFloors}>
                <span className="title">{title}</span>

            </Link>
            <div className={`floors ${showFloorButtons ? "enable" : "disable"}`} onMouseOver={keepFloorsActive} onMouseLeave={hideFloors}>
                {floorButtons}
            </div>
        </div>
    )
}

export default SidebarButton;