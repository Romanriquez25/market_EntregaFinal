import { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom";

import Index from './views'
import Productos from './views/Productos'
import Registrar from './views/Registrar';
import Login from './views/login';
import Perfil from './views/Perfil';
import Compra from './views/compra';
import SubirProducto from './views/SubirProducto';
import ContextProvider from './context/Context';

function App() {

  return (
    <>
    <ContextProvider>
     <div className='App'>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/Productos' element={<Productos />} />
          <Route path='/Registrar' element={<Registrar />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Perfil' element={<Perfil />} />
          <Route path='/Compra' element={<Compra />} />
          <Route path='/SubirProducto' element={<SubirProducto/>} />
        </Routes>
     </div>
     </ContextProvider>
    </>
  )
}

export default App;
