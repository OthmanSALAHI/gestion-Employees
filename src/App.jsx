import ListEmployee from "./components/ListEmployee"
import AddEmployee from "./components/AddEmployee"
import EditEmployee from "./components/EditEmployee"
import { BrowserRouter , Routes ,Route } from "react-router-dom"
export default function App() {
    return(
        <BrowserRouter>
        <>
            <Routes>
                <Route path="/" element={<><AddEmployee/><ListEmployee/></>} />
                <Route path="/edit/:matricule" element={<><EditEmployee/><ListEmployee/></>} />
            </Routes>
        </>
        </BrowserRouter>
    )
}