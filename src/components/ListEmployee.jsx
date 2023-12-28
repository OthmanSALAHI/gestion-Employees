import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Delete } from '../config/actions';
import '../styles/ListStyle.css';

function ListEmployee () {
    const emplys = useSelector(e => e.employees);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const DeleteEmployee=(matricule)=>{
        const emp = emplys.find(e => e.mat === parseInt(matricule))
        if(window.confirm(`tu es sure de suprimer ${emp.name} ??`))
        dispatch(Delete(matricule))
        navigate('/');
    }
    return(
        <div className='list'>
            <div className='header'>
                <h2>List Employees</h2>
                <h3>Nombre Employees : {emplys.length}</h3>
            </div>
            <table>
                <thead>
                    <th>matricule</th>
                    <th>name</th>
                    <th>departement</th>
                    <th>action</th>
                </thead>
                <tbody>
                    {emplys.map((e, idx)=>
                        <tr key={idx}>
                            <td>{e.mat}</td>
                            <td>{e.name}</td>
                            <td>{e.dep}</td>
                            <td className='buttons'>
                                <Link to={`/edit/${e.mat}`}>
                                    <button>modifie</button>
                                </Link>
                                <button onClick={()=>DeleteEmployee(e.mat)}>delete</button>
                            </td>
                        </tr>
                    
                    )}
                </tbody>
            </table>
        </div>
    );
}
export default ListEmployee;