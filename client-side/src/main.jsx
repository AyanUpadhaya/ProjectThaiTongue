import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routers/Routers.jsx'
import AuthProviders from './AuthProviders/AuthProviders.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProviders>
    <RouterProvider router={router}></RouterProvider>
  </AuthProviders>
)
