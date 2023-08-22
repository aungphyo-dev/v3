import {useState} from "react";
import {signOut} from 'firebase/auth'
import {auth} from "../Firebase/index.js";
const useLogout = () => {
    const [error,setError] = useState(null)
    const logout = async ()=>{
        try {
            const res = signOut(auth)
            setError('')
            return res;
        } catch (e){
            setError(e.message)
        }
    }
    return{error,logout}
}
export default useLogout