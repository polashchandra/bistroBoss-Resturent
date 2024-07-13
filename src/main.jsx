import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";

import { Router } from './router/Router.jsx';
import { HelmetProvider } from 'react-helmet-async';
import Authprovider from './provider/Authprovider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <HelmetProvider>
        <div className='max-w-screen-xl mx-auto'>
          <RouterProvider router={Router} />
        </div>
      </HelmetProvider>
    </Authprovider>
  </React.StrictMode>,
)
