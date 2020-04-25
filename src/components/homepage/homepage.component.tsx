import React, { useState, useEffect, ChangeEvent } from 'react';
import { connect } from 'react-redux'
import MaterialTable from 'material-table';
import { selectEmployeesByFloor } from '../../redux/home/home.selectors'
import { Dispatch } from 'redux';
import { IFilters, IHomeState, IHomeOptions, IAppState } from '../../types/AppInterfaces'

import SelectButton from '../select-button/select-button';
import { filterLocation, fetchEmployeesStart } from '../../redux/home/home.action';

import './homepage.styles.scss';

function Homepage({ filterLocation, fetchEmployeesStart, filters, employeesData }: IHomeOptions) {
    useEffect(() => {
        fetchEmployeesStart();
    }, [fetchEmployeesStart]);

    const [state, ] = useState<IHomeState>({
        user: "Alfredo Sanchez",
        comboBox: {
            locations: {
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

    const handleSelect = (event: ChangeEvent<HTMLSelectElement>): void => {
        filterLocation({
            ...filters,
            [event.target.name]: event.target.value
        });
    }

    return (
        <div className="homepage-container" data-test="homepageContainer">
            <div className="homepage-filters">
                <SelectButton data-test="locationsSelectButton" name='location' inputLabel={"Locations"}
                    items={Object.keys(state.comboBox.locations)} handleSelect={handleSelect} itemsSelected={filters.location} />
                <SelectButton data-test="floorsSelectButton" name='floor' inputLabel={"Floors"}
                    items={Object.keys(state.comboBox.locations[filters.location].floors)} handleSelect={handleSelect} itemsSelected={filters.floor} />
                <SelectButton data-test="sectionsSelectButton" name='section' inputLabel={"Section"}
                    items={state.comboBox.locations[filters.location].floors[filters.floor].sections} handleSelect={handleSelect} itemsSelected={filters.section} />

            </div>
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
                        { title: 'Project', field: 'project' },
                        { title: 'Building', field: 'location.building' },
                        { title: 'Floor', field: 'location.floor' },
                        { title: 'Section', field: 'location.section' },
                        { title: 'Seat', field: 'location.seat' },
                    ]}
                    data={employeesData}
                    title="LAYOUT SYSTEM"
                />
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    filterLocation: (filters: IFilters) => dispatch(filterLocation(filters)),
    fetchEmployeesStart: () => dispatch(fetchEmployeesStart())
});

const mapStateToProps = (state: IAppState) => {
    return {
        filters: state.home.filters,
        employeesData: selectEmployeesByFloor(state.home)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
