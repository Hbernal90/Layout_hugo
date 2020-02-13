import React, { useState } from 'react';
import { connect } from 'react-redux'
import MaterialTable from 'material-table';
import { employees } from '../../db/db';

import SelectButton from '../select-button/select-button';
import { filterLocation } from '../../redux/home/home.action'


import './homepage.styles.css';

function Homepage({filterLocation, filters}) {
    const [state, setState] = useState({
        user: "Alfredo Sanchez",
        filters: {
            location: "MDC",
            floor: "0",
            section: "A"
        },
        comboBox:{
            locations:{
                MDC: {
                    floors: {
                        "0": {
                            sections: ["A", "B", "C"]
                        },
                        "18": {
                            sections: ["A", "B", "C"]
                        },
                        "24": {
                            sections: ["A", "B", "C"]
                        }
                    }
                },
                Austin: {
                    floors: {
                        "0": {
                            sections: ["A", "B", "C"]
                        },
                        "18": {
                            sections: ["A", "B", "C"]
                        },
                        "24": {
                            sections: ["A", "B", "C"]
                        }
                    }
                }
            }
        }
    })

    function handleSelect(evt) {
        const value = evt.target.value;
        console.log(value, "-", evt.target.name)
        
        setState({
            ...state,
            filters: {
                ...state.filters,
                [evt.target.name]: value
            }
        })
        console.log("handle", state.filters)
        filterLocation({
            ...state.filters,
            [evt.target.name]: value
        });
    }


    return (
        <div className="homepage-container">
            <SelectButton name='location' inputLabel={"Locations"} items={Object.keys(state.comboBox.locations)} handleSelect={handleSelect} itemsSelected={filters.location} />
            <SelectButton name='floor' inputLabel={"Floors"} items={Object.keys(state.comboBox.locations[state.filters.location].floors)} handleSelect={handleSelect} itemsSelected={state.filters.floor} />
            <SelectButton name='section' inputLabel={"Section"} items={state.comboBox.locations[state.filters.location].floors[state.filters.floor].sections} handleSelect={handleSelect} itemsSelected={state.filters.section} />
            <div className="homepage-image">
                <img src={`${state.filters.floor}/${state.filters.floor}-${state.filters.section}.png`} alt="alt" />
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

const mapDispatchToProps = dispatch => ({
    filterLocation: (filters) => dispatch(filterLocation(filters))
})

const mapStateToProps = state => {
    console.log(state)
    return{
        filters: state.filters
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
