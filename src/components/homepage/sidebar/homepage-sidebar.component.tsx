import React, { useState } from "react";
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

const citiesOptions = [
    {
        id: 1,
        name: "Guadalajara",
        shortName: "MDC",
        buildingId: 1,
    },
    {
        id: 2,
        name: "Austin",
        shortName: "AUS",
        buildingId: 3,
    },
    {
        id: 6,
        name: "Phoenix",
        shortName: "PHX",
        buildingId: 5
    },
    {
        id: 5,
        name: "Dallas",
        shortName: "DLS",
        buildingId: 6
    },
    {
        id: 8,
        name: "New York City",
        shortName: "NYC",
        buildingId: 7
    }
];

function SideBar() {
    const [activeButton, setActiveButton] = useState(-1);
    const buttonList = citiesOptions.map(city => (
        <SidebarButton key={city.id} id={city.id} title={city.name} link={`/buildings/${city.buildingId}`} floors={sampleFloors} activate={setActiveButton} showFloors={activeButton === city.id} />
    ));
    return (
        <div className="homepage-sidebar">
            {buttonList}
            <SidebarButton id={-1} title="NEW" link="/building/new" className="new" showFloors={false} activate={setActiveButton} />
        </div>
    )
}

export default SideBar;