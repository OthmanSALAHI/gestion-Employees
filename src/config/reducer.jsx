const init = {
    employees : [
        {mat : 100, name : "rami" , dep : "ACHAT"},
        {mat : 101, name : "achraf" , dep : "VANTE"},
    ]
}

export const reducer =(state = init , action)=> {
    switch (action.type) {
        case 'add':
            return {...state,employees : [...state.employees,action.payload]};
        case 'edit':
            const employee = state.employees.find((e)=> e.mat === parseInt(action.payload.mat))
            if (employee){
                employee.name = action.payload.name;
                employee.dep = action.payload.dep;
            }
            return state;
        case 'delete':
            return {...state,employees : [...state.employees.filter((e)=> e.mat !== parseInt(action.payload))]};
        default:
            return state;
    }
}