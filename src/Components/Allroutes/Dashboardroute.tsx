import React from 'react'
import { useRoutes } from 'react-router-dom'
import Dashboardhome from '../Dashboard/Dashboardhome'

const Dashboardroute = () => {

    let element = useRoutes([
        {
            path: "/",
            element: <Dashboardhome />
        }
    ])
    return (
        <>
            
        </>
  )
}

export default Dashboardroute