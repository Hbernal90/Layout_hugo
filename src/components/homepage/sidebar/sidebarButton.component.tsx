import React, { useCallback, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { ISidebarButtonOptions } from "../../../types/AppInterfaces";

function SidebarButton(props: ISidebarButtonOptions) {
    const {
        id,
        title,
        link,
        className = "",
        floors = [],
        showFloors = false,
        activate,
        startCountdown,
        preventDeactivation,
        deactivateButtons
    } = props;

    const floorButtons = floors?.map(floor =>
        <Link to={`${link}/${floor.link}`} className="floorButton">
            <span>{floor.name}</span>
        </Link>
    )

    const activateThisButton = useCallback(() => {
        preventDeactivation();
        activate(id);

    }, [id, activate]);


    return (
        <div className="sidebarButtonWrapper">
            <Link to={link} className={`sidebarButton ${className}`} onMouseEnter={activateThisButton} onMouseLeave={startCountdown}>
                <span className="title">{title}</span>

            </Link>
            <div className={`floors ${showFloors ? "enable" : "disable"}`} onMouseOver={preventDeactivation} onMouseLeave={deactivateButtons}>
                {floorButtons}
            </div>
        </div>
    )
}

export default React.memo(SidebarButton);