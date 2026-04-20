import React from 'react'
import './App.css'
import Home from './pages/home/Home'
import Product from './pages/product/Product'
import { BrowserRouter, Route, Router, } from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


// As rotas
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,

  },
  {
    path: '/product',
    element: <Product />,

  }


])

function App() {


  return (

    <div >
      <RouterProvider router={router} />
    </div>


  )
}

export default App
