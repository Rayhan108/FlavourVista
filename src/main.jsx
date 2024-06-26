import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { router } from './Router/Router.jsx'
import { HelmetProvider } from 'react-helmet-async';
ReactDOM.createRoot(document.getElementById('root')).render(
<HelmetProvider>
<React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
</HelmetProvider>
)
