export const selectEmployeesByFloor = state => {
    return state.employeesData.filter(item => item.location.floor == state.filters.floor)
}
