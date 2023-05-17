import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './views/App';
import { Nosotros } from './views/nosotros.jsx';
import { Contact } from './views/contact.jsx';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter, RouterProvider
 } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/nosotros",
    element: <Nosotros/>
  },
  {
    path: "/contacto",
    element: <Contact/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
