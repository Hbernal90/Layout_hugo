import React from "react";
import Slider from "./slider/index.component";
import BuildingData from "./buildingData/index.component";

function BuildingImages(props: any) {
    return (
        <div className="buildingImagesContainer">
            <div className="carousel">
                <Slider building={props.building} />
            </div>
            <div className="buildingInfo">
                <BuildingData building={props.activeBuilding} />
            </div>
        </div>
    )
}

export default BuildingImages;