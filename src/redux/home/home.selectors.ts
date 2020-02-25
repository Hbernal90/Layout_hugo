import { IAppState, IEmployeesData, IFilters } from '../../types/AppInterfaces'

const compareLocations = (filters: IFilters, { location }: IEmployeesData ) => {
    return location && location.building === filters.location && location.floor === filters.floor && location.section === filters.section
}

export const selectEmployeesByFloor = ({filters, employeesData}: IAppState): IEmployeesData[] => {
    return employeesData && employeesData.length ? employeesData.filter((emp: IEmployeesData) => (compareLocations(filters, emp))) : []
}
