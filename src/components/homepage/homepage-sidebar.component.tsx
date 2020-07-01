import React from "react";
import SidebarButton from "./sidebarButton.component"


function SideBar(){
    return (
        <div className="homepage-sidebar">
            <SidebarButton title="MDC" link="/buildings/mdc"/>
            <SidebarButton title="PHX" link="/buildings/phx"/>
            <SidebarButton title="AUS" link="/buildings/aus"/>
            <SidebarButton title="NY" link="/buildings/ny"/>
            <SidebarButton title="Building A" link="/buildings/building_a"/>
            <SidebarButton title="NEW" link="/building/new" className="new"/>
        </div>
    )
}

export default SideBar;