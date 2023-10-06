export const saveListToLocalStorage = (tasks) => {
    localStorage.setItem('ipdlistpatient', JSON.stringify(tasks))
}
export const saveListToLocalStorageOpdPatients = (tasks) => {
    localStorage.setItem('opdlistpatient', JSON.stringify(tasks))
}

export const saveListToLocalStorageAppoinmentPatients = (tasks) => {
    localStorage.setItem('appoinmentlistpatient', JSON.stringify(tasks))
}