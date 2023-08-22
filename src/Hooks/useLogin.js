import {useState} from "react";
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from "../Firebase/index.js";
const useLogin = () => {
    const [error,setError] = useState(null)
    const login = async (email,password)=>{
        try {
            const res = signInWithEmailAndPassword(auth,email,password)
            setError('')
            return res;
        } catch (e){
            setError(e.message)
        }
    }
    return{error,login}
}
export default useLogin