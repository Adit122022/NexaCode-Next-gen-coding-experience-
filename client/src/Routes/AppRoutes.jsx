import React from 'react'
import { BrowserRouter, Routes  , Route} from 'react-router-dom'
import HomePage from '../Components/Pages/HomePage'
import Login from '../Components/Auth/Login'

const AppRoutes = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path ='/'  element={<HomePage/>}/>
    <Route path ='/login'  element={<Login/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default AppRoutes