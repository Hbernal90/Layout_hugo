import React, { Component } from 'react';
import MaterialTable from 'material-table';
import { employees, floors, locations, sections } from '../../db/db';

import SelectButton from '../select-button/select-button';


import './homepage.styles.css';

export class Homepage extends Component {
    constructor() {
        super();
        this.state = {
            user: "Alfredo Sanchez",
            floors: floors,
            floorSelected: 24,
            locations: locations,
            locationSelected: "MDC",
            sections: sections,
            sectionSelected: "24-A"
        }
    }

    handleSelect = (event) => {
        const { value, name } = event.target;
        console.log(value, name)
        this.setState({ [name]: value })
        if(name === 'floorSelected'){
            let defaultSection;
            if(value == 0){
                defaultSection = "Lobby-A"
            } else {
                defaultSection = value.toString() + "-A";
            }
            this.setState({sectionSelected: defaultSection})
        }
    }

    render() {
        const src =`${this.state.floorSelected}/${this.state.sectionSelected}.png`;
        return (
            
            <div className="homepage-container">
                <SelectButton name='locationSelected' inputLabel={"Locations"} items={this.state.locations} handleSelect={this.handleSelect} itemsSelected={this.state.locationSelected} />
                <SelectButton name='floorSelected'  inputLabel={"Floors"} items={this.state.floors} handleSelect={this.handleSelect} itemsSelected={this.state.floorSelected} />
                <SelectButton name='sectionSelected' inputLabel={"Section"} items={this.state.sections[this.state.floorSelected]} handleSelect={this.handleSelect} itemsSelected={this.state.sectionSelected} />
                <div className="homepage-image">  
                       <img src={src} alt="alt" /> 
                </div>
                <br />
                <br /> <br /> <br />
                <div className="">
                    <MaterialTable  
                        options={{
                            
                        }}
                        columns={[
                            { title: 'Name', field: 'name' },
                            { title: 'Building', field: 'building' },
                            { title: 'Floor', field: 'floor', type: 'numeric' }
                        ]}
                        data={employees}
                        title="LAYOUT SYSTEM"
                    />
                </div>
            </div>
        )
    }
}

export default Homepage;
