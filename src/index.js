import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from './Home'
import Aboutus from './Aboutus';
import ABCD from './ABCD';
const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children:[
            {
                path:"/home",
                element:<Home></Home>
            },
            {
                path:"/aboutus",
                element:<Aboutus></Aboutus>
            },
            {
                path:"/add/:a/:b",
                element:<ABCD></ABCD>
            }
        ]
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}></RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
