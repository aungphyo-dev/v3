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
import {useState} from "react";
const DProjectCreate = () => {
    const [photo,setPhoto] = useState("")
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
    const handlePost = (e)=>{
        e.preventDefault()
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
            photo:photo,
            title:title,
            description:description,
            demo:demo,
            github:github,
            skills:skills
        }
        console.log(data)
    }
  return (
      <form onSubmit={handlePost}>
          <div className="relative z-0 w-full mb-6 group">
              <input type="file" value={photo} onChange={(e)=>setPhoto(e.target.value)} name="photo" id="photo" className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2  appearance-none text-white border-gray-600  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
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
                              <img src={HTML} alt=""/>
                      </label>
              </li>
              <li>
                  <input type="checkbox" id="css"  value={css} onChange={()=>setCss(true)} className="hidden peer" required=""/>
                  <label htmlFor="css" className="inline-flex items-center justify-between w-full p-1   border-2  rounded-lg cursor-pointer  border-gray-700 peer-checked:border-blue-600 hover:text-gray-600  peer-checked:text-gray-600  text-gray-400 bg-gray-800 hover:bg-gray-700">
                      <img src={CSS} alt=""/>
                  </label>
              </li>
              <li>
                  <input type="checkbox" id="js"  value={js} onChange={()=>setJs(true)} className="hidden peer" required=""/>
                  <label htmlFor="js" className="inline-flex items-center justify-between w-full p-1   border-2  rounded-lg cursor-pointer  border-gray-700 peer-checked:border-blue-600 hover:text-gray-600  peer-checked:text-gray-600  text-gray-400 bg-gray-800 hover:bg-gray-700">
                      <img src={JS} alt=""/>
                  </label>
              </li>
              <li>
                  <input type="checkbox" id="Bootstrap"  value={bt} onChange={()=>setBt(true)} className="hidden peer" required=""/>
                  <label htmlFor="Bootstrap" className="inline-flex items-center justify-between w-full p-1   border-2  rounded-lg cursor-pointer  border-gray-700 peer-checked:border-blue-600 hover:text-gray-600  peer-checked:text-gray-600  text-gray-400 bg-gray-800 hover:bg-gray-700">
                      <img src={BOT} alt=""/>
                  </label>
              </li>
              <li>
                  <input type="checkbox" id="Sass"  value={sass} onChange={()=>setSass(true)} className="hidden peer" required=""/>
                  <label htmlFor="Sass" className="inline-flex items-center justify-between w-full p-1   border-2  rounded-lg cursor-pointer  border-gray-700 peer-checked:border-blue-600 hover:text-gray-600  peer-checked:text-gray-600  text-gray-400 bg-gray-800 hover:bg-gray-700">
                      <img src={SASS} alt=""/>
                  </label>
              </li>
              <li>
                  <input type="checkbox" id="Tailwindcss"  value={tailwind} onChange={()=>setTailwind(true)} className="hidden peer" required=""/>
                  <label htmlFor="Tailwindcss" className="inline-flex items-center justify-between w-full p-1   border-2  rounded-lg cursor-pointer  border-gray-700 peer-checked:border-blue-600 hover:text-gray-600  peer-checked:text-gray-600  text-gray-400 bg-gray-800 hover:bg-gray-700">
                      <img src={TAILWIND} alt=""/>
                  </label>
              </li>
              <li>
                  <input type="checkbox" id="Reactjs"  value={react} onChange={()=>setReact(true)} className="hidden peer" required=""/>
                  <label htmlFor="Reactjs" className="inline-flex items-center justify-between w-full p-1   border-2  rounded-lg cursor-pointer  border-gray-700 peer-checked:border-blue-600 hover:text-gray-600  peer-checked:text-gray-600  text-gray-400 bg-gray-800 hover:bg-gray-700">
                      <img src={REACT} alt=""/>
                  </label>
              </li>
              <li>
                  <input type="checkbox" id="Redux"  value={redux} onChange={()=>setRedux(true)} className="hidden peer" required=""/>
                  <label htmlFor="Redux" className="inline-flex items-center justify-between w-full p-1   border-2  rounded-lg cursor-pointer  border-gray-700 peer-checked:border-blue-600 hover:text-gray-600  peer-checked:text-gray-600  text-gray-400 bg-gray-800 hover:bg-gray-700">
                      <img src={REDUX} alt=""/>
                  </label>
              </li>
              <li>
                  <input type="checkbox" id="PHP"  value={php} onChange={()=>setPhp(true)} className="hidden peer" required=""/>
                  <label htmlFor="PHP" className="inline-flex items-center justify-between w-full p-1   border-2  rounded-lg cursor-pointer  border-gray-700 peer-checked:border-blue-600 hover:text-gray-600  peer-checked:text-gray-600  text-gray-400 bg-gray-800 hover:bg-gray-700">
                      <img src={PHP} alt=""/>
                  </label>
              </li>
              <li>
                  <input type="checkbox" id="Laravel"  value={laravel} onChange={()=>setLaravel(true)} className="hidden peer" required=""/>
                  <label htmlFor="Laravel" className="inline-flex items-center justify-between w-full p-1   border-2  rounded-lg cursor-pointer  border-gray-700 peer-checked:border-blue-600 hover:text-gray-600  peer-checked:text-gray-600  text-gray-400 bg-gray-800 hover:bg-gray-700">
                      <img src={LARAVEL} alt=""/>
                  </label>
              </li>
          </ul>

          <button type="submit" className="text-white  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700">Submit</button>
      </form>
  )
}
export default DProjectCreate