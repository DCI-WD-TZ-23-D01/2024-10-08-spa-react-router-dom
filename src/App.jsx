import { useState } from 'react'

import './App.css'
import { RouterProvider } from 'react-router-dom'
import { RouterApp } from './utils/RouterApp'

function App() {


  return <RouterProvider router={RouterApp} />
}

export default App
