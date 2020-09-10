import React, { useState } from 'react';

import Sidebar from './sidebar/homepage-sidebar.component';
import BuildingImages from "./buildingImages.component";

import './homepage.styles.scss';

function Homepage() {
    const [activeBuilding, setActiveBuilding] = useState<number>(1);    // Default = MDC
    return (
        <div className="homepage-container" data-test="homepageContainer">
            <Sidebar setActiveBuilding={setActiveBuilding}/>
            <BuildingImages activeBuilding={activeBuilding}/>
        </div>
    )
}

export default Homepage;