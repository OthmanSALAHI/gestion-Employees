import { useDispatch, useSelector } from "react-redux";
import { Add } from "../config/actions";
import '../styles/formStyle.css';

function AddEmployee () {
    const dispatch = useDispatch()
    const employees = useSelector(d => d.employees);
    const submit = (e) => {
        e.preventDefault();
        const form = e.target.elements;
        const mat = parseInt(form.mat.value);
        const name = form.name.value;
        const dep = form.dep.value;
        let exist = employees.find((e)=> e.mat === parseInt(mat))
        if (exist){
            alert(`cette matricule de employee ${exist.name}`)
        }else{
        const nEmployee = {
            mat : mat,
            name : name,
            dep : dep
        }
        dispatch(Add(nEmployee));
    }

    }

    return (
        <div>
            <form onSubmit={(e)=>submit(e)}>
                <table>
                    <tbody>
                        <tr>
                            <td>matricule</td>
                            <td><input type="number" name="mat" required /></td>
                        </tr>
                        <tr>
                            <td>name</td>
                            <td><input type="text" name="name" required /></td>
                        </tr>
                        <tr>
                            <td>departement</td>
                            <td>
                                <select name="dep" id="" required>
                                    <option>ACHAT</option>    
                                    <option>VENTE</option>    
                                    <option>HR</option>    
                                    <option>MARKETING</option>    
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button type="submit">ajouter</button>
            </form>
        </div>
    );
}
export default AddEmployee;