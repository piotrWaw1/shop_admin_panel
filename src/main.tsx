import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import axios from "axios";
import AdvertsTable from "./adverts/AdvertsTable.tsx";
import AdvertSide from "./adverts/advertSide/AdvertSide.tsx";
import Edit from "./editComponents/Edit.tsx";
import ErrorPage from "./components/ErrorPage.tsx";
import Dashboard from "./dashboard/Dashboard.tsx";

axios.defaults.baseURL = "http://127.0.0.1:3200";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Dashboard/>,
            },
            {
                path: "/adverts",
                element: <AdvertsTable/>,
            },
            {
                path: "/adverts/:advertId",
                element: <AdvertSide/>,
            },
            {
                path: "/adverts/:advertId/edit",
                element: <Edit/>,
            },
            {
                path: "*",
                element: <ErrorPage/>
            }
        ]
    }])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)
