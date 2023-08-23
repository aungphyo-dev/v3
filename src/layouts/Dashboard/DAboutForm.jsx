import {serverTimestamp} from "firebase/firestore";
import {useState} from "react";
import useFiresotre from "../../Hooks/useFiresotre.js";

const DAboutForm = () => {
    const [about,setAbout] = useState('')
    const [loading,setLoading] = useState(false)
    const {addCollection} = useFiresotre()
    const handleSubmit = async (e)=>{
        e.preventDefault()
        setLoading(true)
        const data = {
            about:about,
            created_at:serverTimestamp()
        }
        const res = await addCollection("about",data)
        if (res){
            setAbout('')
            setLoading(false)
        }
    }
  return(
      <section className='w-full min-h-screen flex justify-center items-center'>
          <form onSubmit={handleSubmit} className='w-full'>
              <div className="relative z-0 w-full mb-6 group">
                  <textarea rows={7}  value={about} onChange={(e)=>setAbout(e.target.value)} name="description" id="description" className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2  appearance-none text-white border-gray-600  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required></textarea>
                  <label htmlFor="description" className="peer-focus:font-medium absolute text-sm  text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Project Description</label>
              </div>
              <button type="submit" className="text-white  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700">
                  {loading?"creating....":"create"}
              </button>
          </form>
      </section>
  )
}
export default DAboutForm