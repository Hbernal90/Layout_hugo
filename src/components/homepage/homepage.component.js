import React, { Component } from 'react';
import MaterialTable from 'material-table';
import { employees, floors } from '../../db/db';
import layout from '../../assets/layout3.jpg';

import SelectButton from '../select-button/select-button';


import './homepage.styles.css';

export class Homepage extends Component {
    constructor() {
        super();
        this.state = {
            user: "Alfredo Sanchez",
            floor: floors,
            floorSelected: 24
        }
    }

    handleSelect = () => {
        console.log("WORKS!!!!")
    }

    render() {
        return (
            <div className="homepage-container">

                <SelectButton floor={this.state.floor} handle={this.handleSelect} />
                <div className="homepage-image">
                    <img src={layout} alt="alt" />
                </div>
                <br />
                <br /> <br /> <br />
                <div className="">
                    <MaterialTable
                        options={{
                            exportButton: true
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
