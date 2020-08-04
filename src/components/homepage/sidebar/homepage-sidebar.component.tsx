import React from "react";
import SidebarButton from "./sidebarButton.component"

const sampleFloors = [
    {
        name: "Floor 18",
        link: "floor18"
    },
    {
        name: "Floor 24",
        link: "lvl24"
    },
    {
        name: "Lobby",
        link: "lobby"
    }
]


function SideBar() {
    return (
        <div className="homepage-sidebar">
            <SidebarButton title="MDC" link="/buildings/mdc" floors={sampleFloors} />
            <SidebarButton title="PHX" link="/buildings/phx" floors={sampleFloors} />
            <SidebarButton title="AUS" link="/buildings/aus" floors={sampleFloors} />
            <SidebarButton title="NY" link="/buildings/ny" floors={sampleFloors} />
            <SidebarButton title="Building A" link="/buildings/building_a" floors={sampleFloors} />
            <SidebarButton title="NEW" link="/building/new" className="new" floors={sampleFloors} />
        </div>
    )
}

export default SideBar;