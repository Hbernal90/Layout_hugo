import { IAppState, IEmployeesData } from '../../types/AppInterfaces'

export const selectEmployeesByFloor = ({filters, employeesData}: IAppState): IEmployeesData[] => {
    return employeesData ? employeesData.filter(({location}) => location.building === filters.location ? location.floor === filters.floor ? location.section === filters.section : false : false) : []
}
