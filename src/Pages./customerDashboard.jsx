import React from 'react'
import Dashboard from '../components/Client/Dashboard'
import SideBar from '../components/Client/SideBar'

export const CustomerDashboard = () => {
  return (
    <div>
        <SideBar>
            <Dashboard/>
        </SideBar>

    </div>
  )
}
