import React, { useCallback } from "react";
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
        deactivateButtons,
        callbackAction
    } = props;
    const onClick = useCallback(() => {
        callbackAction(id);
    }, [id]);
    const floorButtons = floors?.map(floor =>
        <Link key={floor.id} to={`${link}/Floors/${floor.id}`} className="floorButton">
            <span>{floor.name}</span>
        </Link>
    )

    const activateThisButton = useCallback(() => {
        preventDeactivation();
        activate(id);
    }, [id, activate, preventDeactivation]);


    return (
        <div className="sidebarButtonWrapper">
            <div className={`sidebarButton ${className}`} onMouseEnter={activateThisButton} onMouseLeave={startCountdown} onClick={onClick}>
                <span className="title">{title}</span>

            </div>
            {floorButtons.length > 0 && 
                <div className={`floors ${showFloors ? "enable" : "disable"}`} onMouseOver={preventDeactivation} onMouseLeave={deactivateButtons}>
                    {floorButtons}
                </div>
            }
        </div>
    )
}

export default React.memo(SidebarButton);