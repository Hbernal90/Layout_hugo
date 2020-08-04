import React, { useEffect } from 'react';
import { connect } from 'react-redux'
// import MaterialTable from 'material-table';
import { selectEmployeesByFloor } from '../../redux/home/home.selectors'
import { Dispatch } from 'redux';
import { IFilters, IHomeOptions, IAppState } from '../../types/AppInterfaces'

// import SelectButton from '../select-button/select-button';
import Sidebar from './sidebar/homepage-sidebar.component';
import BuildingImages from "./buildingImages.component";
import { filterLocation, fetchEmployeesStart } from '../../redux/home/home.action';

import './homepage.styles.scss';

function Homepage({ filterLocation, fetchEmployeesStart, filters, employeesData }: IHomeOptions) {
    useEffect(() => {
        fetchEmployeesStart();
    }, [fetchEmployeesStart]);

    return (
        <div className="homepage-container" data-test="homepageContainer">
            <Sidebar />
            <BuildingImages />
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
