import React from 'react'
import CreateEvent from '../components/Organizer/CreateEvent'
import SideBar from '../components/Organizer/OrganiserSidebar'

export const CreateEvents = () => {
  return (
    <div>
        <SideBar>
            <CreateEvent/>
        </SideBar>

    </div>
  )
}
