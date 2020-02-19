import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import MaterialTable from 'material-table';
import { selectEmployeesByFloor } from '../../redux/home/home.selectors'
//import { employees } from '../../db/db';

import SelectButton from '../select-button/select-button';
import { filterLocation, fetchEmployeesStart } from '../../redux/home/home.action'


import './homepage.styles.scss';

function Homepage({filterLocation, fetchEmployeesStart, filters, employeesData}) {
    useEffect(() => {
        fetchEmployeesStart();
    }, [fetchEmployeesStart]);

    const [state, setState] = useState({
        user: "Alfredo Sanchez",
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
        filterLocation({
            ...filters,
            [evt.target.name]: evt.target.value
        });
    }

    return (
        <div className="homepage-container">
            <SelectButton name='location' inputLabel={"Locations"} items={Object.keys(state.comboBox.locations)} handleSelect={handleSelect} itemsSelected={filters.location} />
            <SelectButton name='floor' inputLabel={"Floors"} items={Object.keys(state.comboBox.locations[filters.location].floors)} handleSelect={handleSelect} itemsSelected={filters.floor} />
            <SelectButton name='section' inputLabel={"Section"} items={state.comboBox.locations[filters.location].floors[filters.floor].sections} handleSelect={handleSelect} itemsSelected={filters.section} />
            <div className="homepage__image">
                <img src={`${filters.floor}/${filters.floor}-${filters.section}.png`} alt="alt" />
            </div>
            <br />
            <br /> <br /> <br />
            <div className="">
                <MaterialTable
                    options={{

                    }}
                    columns={[
                        { title: 'Name', field: 'name' },
                        { title: 'Building', field: 'location.building' },
                        { title: 'Floor', field: 'location.floor', type: 'numeric' }
                    ]}
                    data={employeesData}
                    title="LAYOUT SYSTEM"
                />
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    filterLocation: (filters) => dispatch(filterLocation(filters)),
    fetchEmployeesStart: () => dispatch(fetchEmployeesStart())
});

const mapStateToProps = state => ({
        filters: state.filters,
        employeesData: selectEmployeesByFloor(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
