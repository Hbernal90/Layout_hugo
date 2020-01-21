import React, { Component, useState } from 'react';
import MaterialTable from 'material-table';
import { employees, floors } from '../../db/db';
import layout24 from '../../assets/24.png';
import layout18 from '../../assets/18.png';
import layout0 from '../../assets/lobby.png';

import SelectButton from '../select-button/select-button';


import './homepage.styles.css';

export class Homepage extends Component {
    constructor() {
        super();
        this.state = {
            user: "Alfredo Sanchez",
            floors: floors,
            floorSelected: 24
        }
    }

    handleSelect = (event) => {
        console.log(event);
        this.setState({
            floorSelected: event.target.value
        })
    }

    render() {
        return (
            <div className="homepage-container">
                
                <SelectButton floors={this.state.floors} handleSelect={this.handleSelect} floorSelected={this.state.floorSelected} />
                <div className="homepage-image"> 
                      {
                          this.state.floorSelected === 24 ? <img src={layout24} alt="alt" /> :
                          this.state.floorSelected === 18 ? <img src={layout18} alt="alt" /> :
                          this.state.floorSelected === 0  ? <img src={layout0} alt="alt" /> : <div>ERROR</div>
                    }
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
