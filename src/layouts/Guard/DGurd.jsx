import Cookies from "js-cookie";
import {Navigate} from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard.jsx";

const DGurd = () => {
    const data = Cookies.get('user')
    if (!!data){
        const user = JSON.parse(data)
        return <Dashboard user={user}/>
    }
    return <Navigate to='/login'/>
}
export default DGurd