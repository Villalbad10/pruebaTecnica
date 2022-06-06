import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import NavbarComponent from '../components/NavbarComponent'
import Inicio from '../containers/Inicio'
import Registro from '../containers/Registro'

const AppRoutes = () => {
   return (
      <>
         <BrowserRouter>
            <NavbarComponent />
            <Routes>
               <Route path='/' element={<Inicio />} />
               <Route path='registro' element={<Registro />} />


               <Route path='*' element={<Navigate to='/' />} />
            </Routes>
         </BrowserRouter>
      </>
   )
}

export default AppRoutes