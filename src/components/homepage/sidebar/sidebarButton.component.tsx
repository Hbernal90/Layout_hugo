import React, { useCallback, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { ISidebarButtonOptions } from "../../../types/AppInterfaces";

function SidebarButton({ title, link, className = "", floors = [], showFloors = false, activate = () => { }, id }: ISidebarButtonOptions) {
    const floorButtons = floors?.map(floor =>
        <Link to={`${link}/${floor.link}`} className="floorButton">
            <span>{floor.name}</span>
        </Link>
    )
    var fuck: any = null;
    const [removing, setRemoving] = useState("");

    const activateThisButton = useCallback(() => {
        activate(id);
    }, [id, activate]);

    const deactiveThisButton = useCallback(() => {
        activate(-1)
    }, [id, activate]);

    const startCountdown = useCallback(() => {
        if (fuck === null)
            fuck = setTimeout(deactiveThisButton, 2000);
    }, [])

    const preventDeactivation = useCallback(() => {
        if (fuck != null) {
            clearTimeout(fuck);
            fuck = null;
        }
    }, []);

    return (
        <div className="sidebarButtonWrapper">
            <Link to={link} className={`sidebarButton ${className}`} onMouseOver={activateThisButton} onMouseLeave={startCountdown}>
                <span className="title">{title}</span>

            </Link>
            <div className={`floors ${showFloors ? "enable" : "disable"}`} onMouseOver={preventDeactivation} onMouseLeave={deactiveThisButton}>
                {floorButtons}
            </div>
        </div>
    )
}

export default React.memo(SidebarButton);