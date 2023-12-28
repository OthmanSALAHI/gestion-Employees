import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Edit } from "../config/actions";

function EditEmployee () {
    const {matricule} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const employee = useSelector(state => state.employees
        .find(emp => emp.mat === parseInt(matricule)));
    const [name,setName] = useState(employee.name);
    const [dep,setDep] = useState(employee.dep);
    const submit=()=>{
        const nEmployee = {
            mat : matricule,
            name : name,
            dep : dep
        }
        if(window.confirm(`tu es sure de modifie ${employee.name} ?`))
        dispatch(Edit(nEmployee));
        navigate('/');
    }
    return(
        <div>
             <form onSubmit={(e)=>submit(e)}>
                <table>
                    <tbody>
                        <tr>
                            <td>name</td>
                            <td><input type="text" value={name} name="name" onChange={(e)=>setName(e.target.value)} required /></td>
                        </tr>
                        <tr>
                            <td>departement</td>
                            <td><input type="text" value={dep} name="dep" onChange={(e)=>setDep(e.target.value)} required /></td>
                        </tr>
                    </tbody>
                </table>
                <button type="submit">enregistrer</button>
            </form>
        </div>
    );
}
export default EditEmployee;