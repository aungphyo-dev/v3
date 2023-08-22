// noinspection JSCheckFunctionSignatures,JSUnusedAssignment
import HTML from '../../assets/icons/icons8-html-48.png'
import CSS from '../../assets/icons/icons8-css-48.png'
import JS from '../../assets/icons/icons8-js-48.png'
import BOT from '../../assets/icons/icons8-bootstrap-48.png'
import SASS from '../../assets/icons/icons8-sass-48.png'
import TAILWIND from '../../assets/icons/icons8-tailwindcss-48.png'
import REACT from '../../assets/icons/icons8-react-native-48.png'
import REDUX from '../../assets/icons/icons8-redux-48.png'
import PHP from '../../assets/icons/icons8-php-48.png'
import LARAVEL from '../../assets/icons/icons8-laravel-48.png'
import {useEffect, useState} from "react";
import {serverTimestamp} from 'firebase/firestore'
import useFiresotre from "../../Hooks/useFiresotre.js";
const DProjectForm = () => {
    const [file,setFile] = useState(null)
    const [url,setUrl] = useState(null)
    const {addCollection} = useFiresotre()
    const handlePhotochange = (e) => {
        setFile(e.target.files[0])
    }
    const imagePreview = (file)=>{
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = ()=>{
            setUrl(reader.result)
        }
    }
    useEffect(()=>{
        if(file){
            imagePreview(file)
        }
    },[file])
    const [title,setTitle] = useState("");
    const [demo,setDemo] = useState("");
    const [github,setGithub] = useState("");
    const [description,setDescription] = useState("");
    const [html,setHtml] = useState(false);
    const [css,setCss] = useState(false);
    const [js,setJs] = useState(false);
    const [bt,setBt] = useState(false);
    const [sass,setSass] = useState(false);
    const [tailwind,setTailwind] = useState(false);
    const [react,setReact] = useState(false);
    const [redux,setRedux] = useState(false);
    const [php,setPhp] = useState(false);
    const [laravel,setLaravel] = useState(false);
    const [loading,setLoading] = useState(false)
    const handlePost = async (e)=>{
        e.preventDefault()
        setLoading(true)
        const skills = [];
        html &&skills.push("HTML");
        css &&skills.push("CSS");
        js &&skills.push("Javascript");
        bt &&skills.push("Bootstrap");
        sass &&skills.push("Sass");
        tailwind &&skills.push("Tailwindcss");
        react &&skills.push("Reactjs");
        redux &&skills.push("Redux");
        php &&skills.push("Php");
        laravel &&skills.push("Laravel");
        const data = {
            title:title,
            description:description,
            demo:demo,
            github:github,
            skills:skills,
            created_at:serverTimestamp()
        }
        const res = await addCollection(data,file)
        if (res){
            setTitle('')
            setDemo('')
            setGithub('')
            setDescription('')
            setUrl('')
            setLoading(false)
        }
    }
  return (
      <form onSubmit={handlePost}>
          <div className="relative flex items-center justify-center w-full mb-6">
              <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                      </svg>
                      {url&&<img src={url} className='absolute inset-0 h-[256px] w-full object-cover' alt="dd"/>}
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">Click to upload</p>
                  </div>
                  <input onChange={handlePhotochange} id="dropzone-file" type="file" className="hidden" />
              </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
              <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} name="title" id="title" className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2  appearance-none text-white border-gray-600  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label htmlFor="title" className="peer-focus:font-medium absolute text-sm  text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Project Title</label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
              <input type="text"  value={demo} onChange={(e)=>setDemo(e.target.value)} name="project_demo" id="project_demo" className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2  appearance-none text-white border-gray-600  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label htmlFor="project_demo" className="peer-focus:font-medium absolute text-sm  text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Project Demo</label>
          </div>
              <div className="relative z-0 w-full mb-6 group">
                  <input type="text"  value={github} onChange={(e)=>setGithub(e.target.value)} name="project_github" id="project_github" className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2  appearance-none text-white border-gray-600  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                  <label htmlFor="project_github" className="peer-focus:font-medium absolute text-sm  text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Project Github</label>
              </div>
          <div className="relative z-0 w-full mb-6 group">
              <textarea rows={7}  value={description} onChange={(e)=>setDescription(e.target.value)} name="description" id="description" className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2  appearance-none text-white border-gray-600  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required></textarea>
              <label htmlFor="description" className="peer-focus:font-medium absolute text-sm  text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Project Description</label>
          </div>
          <ul className="w-full flex justify-start items-center gap-x-2 mb-5">
              <li>
                  <input type="checkbox" id="html"  value={html} onChange={()=>setHtml(true)} className="hidden peer" required=""/>
                      <label htmlFor="html" className="inline-flex items-center justify-between w-full p-1   border-2  rounded-lg cursor-pointer  border-gray-700 peer-checked:border-blue-600 hover:text-gray-600  peer-checked:text-gray-600  text-gray-400 bg-gray-800 hover:bg-gray-700">
                              <img className='block w-6 h-6' src={HTML} alt=""/>
                      </label>
              </li>
              <li>
                  <input type="checkbox" id="css"  value={css} onChange={()=>setCss(true)} className="hidden peer" required=""/>
                  <label htmlFor="css" className="inline-flex items-center justify-between w-full p-1   border-2  rounded-lg cursor-pointer  border-gray-700 peer-checked:border-blue-600 hover:text-gray-600  peer-checked:text-gray-600  text-gray-400 bg-gray-800 hover:bg-gray-700">
                      <img className='block w-6 h-6' src={CSS} alt=""/>
                  </label>
              </li>
              <li>
                  <input type="checkbox" id="js"  value={js} onChange={()=>setJs(true)} className="hidden peer" required=""/>
                  <label htmlFor="js" className="inline-flex items-center justify-between w-full p-1   border-2  rounded-lg cursor-pointer  border-gray-700 peer-checked:border-blue-600 hover:text-gray-600  peer-checked:text-gray-600  text-gray-400 bg-gray-800 hover:bg-gray-700">
                      <img className='block w-6 h-6' src={JS} alt=""/>
                  </label>
              </li>
              <li>
                  <input type="checkbox" id="Bootstrap"  value={bt} onChange={()=>setBt(true)} className="hidden peer" required=""/>
                  <label htmlFor="Bootstrap" className="inline-flex items-center justify-between w-full p-1   border-2  rounded-lg cursor-pointer  border-gray-700 peer-checked:border-blue-600 hover:text-gray-600  peer-checked:text-gray-600  text-gray-400 bg-gray-800 hover:bg-gray-700">
                      <img className='block w-6 h-6' src={BOT} alt=""/>
                  </label>
              </li>
              <li>
                  <input type="checkbox" id="Sass"  value={sass} onChange={()=>setSass(true)} className="hidden peer" required=""/>
                  <label htmlFor="Sass" className="inline-flex items-center justify-between w-full p-1   border-2  rounded-lg cursor-pointer  border-gray-700 peer-checked:border-blue-600 hover:text-gray-600  peer-checked:text-gray-600  text-gray-400 bg-gray-800 hover:bg-gray-700">
                      <img className='block w-6 h-6' src={SASS} alt=""/>
                  </label>
              </li>
              <li>
                  <input type="checkbox" id="Tailwindcss"  value={tailwind} onChange={()=>setTailwind(true)} className="hidden peer" required=""/>
                  <label htmlFor="Tailwindcss" className="inline-flex items-center justify-between w-full p-1   border-2  rounded-lg cursor-pointer  border-gray-700 peer-checked:border-blue-600 hover:text-gray-600  peer-checked:text-gray-600  text-gray-400 bg-gray-800 hover:bg-gray-700">
                      <img className='block w-6 h-6' src={TAILWIND} alt=""/>
                  </label>
              </li>
              <li>
                  <input type="checkbox" id="Reactjs"  value={react} onChange={()=>setReact(true)} className="hidden peer" required=""/>
                  <label htmlFor="Reactjs" className="inline-flex items-center justify-between w-full p-1   border-2  rounded-lg cursor-pointer  border-gray-700 peer-checked:border-blue-600 hover:text-gray-600  peer-checked:text-gray-600  text-gray-400 bg-gray-800 hover:bg-gray-700">
                      <img className='block w-6 h-6' src={REACT} alt=""/>
                  </label>
              </li>
              <li>
                  <input type="checkbox" id="Redux"  value={redux} onChange={()=>setRedux(true)} className="hidden peer" required=""/>
                  <label htmlFor="Redux" className="inline-flex items-center justify-between w-full p-1   border-2  rounded-lg cursor-pointer  border-gray-700 peer-checked:border-blue-600 hover:text-gray-600  peer-checked:text-gray-600  text-gray-400 bg-gray-800 hover:bg-gray-700">
                      <img className='block w-6 h-6' src={REDUX} alt=""/>
                  </label>
              </li>
              <li>
                  <input type="checkbox" id="PHP"  value={php} onChange={()=>setPhp(true)} className="hidden peer" required=""/>
                  <label htmlFor="PHP" className="inline-flex items-center justify-between w-full p-1   border-2  rounded-lg cursor-pointer  border-gray-700 peer-checked:border-blue-600 hover:text-gray-600  peer-checked:text-gray-600  text-gray-400 bg-gray-800 hover:bg-gray-700">
                      <img className='block w-6 h-6' src={PHP} alt=""/>
                  </label>
              </li>
              <li>
                  <input type="checkbox" id="Laravel"  value={laravel} onChange={()=>setLaravel(true)} className="hidden peer" required=""/>
                  <label htmlFor="Laravel" className="inline-flex items-center justify-between w-full p-1   border-2  rounded-lg cursor-pointer  border-gray-700 peer-checked:border-blue-600 hover:text-gray-600  peer-checked:text-gray-600  text-gray-400 bg-gray-800 hover:bg-gray-700">
                      <img className='block w-6 h-6' src={LARAVEL} alt=""/>
                  </label>
              </li>
          </ul>

          <button type="submit" className="text-white  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700">
              {loading?"Creating......":"create"}
          </button>
      </form>
  )
}
export default DProjectForm