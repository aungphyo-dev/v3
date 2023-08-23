import React from 'react'
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
import DAbout from "./layouts/Dashboard/DAbout.jsx";
import DAboutForm from "./layouts/Dashboard/DAboutForm.jsx";
import DAboutFormEdit from "./layouts/Dashboard/DAboutFormEdit.jsx";
import DExperience from "./layouts/Dashboard/DExperience.jsx";
import DExperienceForm from "./layouts/Dashboard/DExperienceForm.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/dash-board' element={<DGurd/>}>
                    <Route path='project/all' element={<DProjects/>}/>
                    <Route path='project/create' element={<DProjectForm/>}/>
                    <Route path='project/edit/:id' element={<DProjectFormEdit/>}/>
                    <Route path='about/all' element={<DAbout/>}/>
                    <Route path='about/create' element={<DAboutForm/>}/>
                    <Route path='about/edit/:id' element={<DAboutFormEdit/>}/>
                    <Route path='experience/all' element={<DExperience/>}/>
                    <Route path='experience/create' element={<DExperienceForm/>}/>
                </Route>
                <Route path='/projects' element={<Projects/>}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
