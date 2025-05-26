import React from 'react'
import AppRoutes from './Routes/AppRoutes'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <>
   <div className='overflow-x-hidden'>
     <AppRoutes/>
     <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
   </div>
    </>
  )
}

export default App