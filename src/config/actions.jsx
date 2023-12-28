export function Add(em) {
    return {type : 'add' , payload : em } 
}
export function Edit(em) {
    return {type : 'edit' , payload : em } 
}
export function Delete(em) {
    return {type : 'delete' , payload : em } 
}