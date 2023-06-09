import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import Home from './components/Home/Home'
import Countries from './components/Countries/Countries'
import CountryDetail from './components/CountryDetail/CountryDetail'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },

      {
        path: '/countries',
        element: <Countries></Countries>,
        loader: () => fetch(`https://restcountries.com/v3.1/all`)
      },

      {
        path: 'country/:countryId',
        element: <CountryDetail></CountryDetail>,
        loader: ({ params }) => fetch(`https://restcountries.com/v3.1/alpha/${params.countryId}`)
      }
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
