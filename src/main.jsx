import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux";
import {store} from "./service/store.js";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./layouts/Dashboard/Dashboard.jsx";
import DProjects from "./layouts/Dashboard/DProjects.jsx";
import DProjectCreate from "./layouts/Dashboard/DProjectCreate.jsx";
import Error from "./layouts/Error/Error.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}/>
                <Route path='/dashboard' element={<Dashboard/>}>
                    <Route path='project/all' element={<DProjects/>}/>
                    <Route path='project/create' element={<DProjectCreate/>}/>
                </Route>
                <Route path='*' element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
