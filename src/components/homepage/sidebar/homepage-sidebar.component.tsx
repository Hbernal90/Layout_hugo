import React, { useState, useCallback, useEffect } from "react";
import SidebarButton from "./sidebarButton.component"
import axios from "axios";
import { IFloor } from "../../../types/AppInterfaces";
import { IBuildingButton } from "../../../types/AppInterfaces";


function SideBar() {
    const [activeButton, setActiveButton] = useState<number>(-1);
    const [options, setOptions] = useState<IBuildingButton[]>([]);
    var timer: any = null;

    useEffect(() => {
        (async function () {
            axios.get("https://localhost:5001/api/v1/Home/Buildings").then(async res => {
                const { data } = res;
                var options: IBuildingButton[] = [];
                for (var i in data) {
                    const floorsResult = await axios.get("https://localhost:5001/api/v1/Buildings/" + data[i].id + "/Floors");
                    const floorsData = floorsResult.data;
                    var buildingFloors: IFloor[] = [];
                    for (var f of floorsData) {
                        buildingFloors.push({
                            name: f.name,
                            id: f.id,
                            buildingId: f.buildingId,
                            description: f.description
                        });
                    }
                    options.push({
                        id: data[i].id,
                        name: data[i].name,
                        shortName: data[i].shortName,
                        floors: buildingFloors
                    });
                }
                setOptions(options);
            });

        })();

    }, [])

    const deactivateButtons = useCallback(() => {
        setActiveButton(-1);
        if (timer != null) {
            clearTimeout(timer);
            timer = null;
        }
    }, [timer])

    const startCountdown = useCallback(() => {
        if (timer === null)
            timer = setTimeout(deactivateButtons, 1500);
    }, [timer]);

    const preventDeactivation = useCallback(() => {
        if (timer != null) {
            clearTimeout(timer);
            timer = null;
        }
    }, [timer])


    const buttonList = options.map(option => (
        <SidebarButton
            key={option.id}
            id={option.id}
            title={option.shortName}
            link={`/buildings/${option.id}`}
            floors={option.floors}
            activate={setActiveButton}
            showFloors={activeButton === option.id}
            startCountdown={startCountdown}
            preventDeactivation={preventDeactivation}
            deactivateButtons={deactivateButtons}
        />
    ));
    return (
        <div className="homepage-sidebar">
            {buttonList}
            <SidebarButton
                id={-1}
                title="NEW"
                link="/building/new"
                className="new"
                showFloors={false}
                activate={setActiveButton}
                startCountdown={startCountdown}
                preventDeactivation={preventDeactivation}
                deactivateButtons={deactivateButtons}
            />
        </div>
    )
}

export default SideBar;