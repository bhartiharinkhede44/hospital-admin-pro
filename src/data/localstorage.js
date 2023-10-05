export const saveListToLocalStorage = (tasks) => {
    localStorage.setItem('ipdlistpatient', JSON.stringify(tasks))
}
export const saveListToLocalStorageOpdPatients = (tasks) => {
    localStorage.setItem('opdlistpatient', JSON.stringify(tasks))
}