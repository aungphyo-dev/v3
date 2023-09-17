import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux";
import {store} from "./service/store.js";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DProjects from "./layouts/Dashboard/DProjects.jsx";
import DProjectForm from "./layouts/Dashboard/DProjectForm.jsx";
import Error from "./layouts/Error/Error.jsx";
import Login from "./layouts/Login/Login.jsx";
import DGurd from "./layouts/Guard/DGurd.jsx";
import Projects from "./layouts/Project/Projects.jsx";
import DProjectFormEdit from "./layouts/Dashboard/DProjectFormEdit.jsx";
import DExperience from "./layouts/Dashboard/DExperience.jsx";
import DExperienceForm from "./layouts/Dashboard/DExperienceForm.jsx";
import DExperienceFormEdit from "./layouts/Dashboard/DExperienceFormEdit.jsx";
import DCVForm from "./layouts/Dashboard/DCVForm.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/dash-board' element={<DGurd/>}>
                    <Route path='project/all' element={<DProjects/>}/>
                    <Route path='project/create' element={<DProjectForm/>}/>
                    <Route path='project/edit/:id' element={<DProjectFormEdit/>}/>
                    <Route path="cv/update" element={<DCVForm/>}/>
                    <Route path='experience/all' element={<DExperience/>}/>
                    <Route path='experience/create' element={<DExperienceForm/>}/>
                    <Route path='experience/edit/:id' element={<DExperienceFormEdit/>}/>
                </Route>
                <Route path='/projects' element={<Projects/>}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    </Provider>
)
