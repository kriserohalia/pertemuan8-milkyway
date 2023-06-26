import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Dashboard from './page/Dashboard'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import About from './page/About/index.jsx'
import Shop from './page/Shop/index.jsx'
import DetailProduk from './page/DetailProduk/index.jsx'

const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
      path: '/',
      element: <Dashboard/>
    },
    {
      path:'/detail-produk/:idProduk',
      element: <DetailProduk/>
    },
    {
      path: '/about',
      element: <About/>
    },
    {
      path: '/shop',
      element: <Shop/>
    }
  ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)