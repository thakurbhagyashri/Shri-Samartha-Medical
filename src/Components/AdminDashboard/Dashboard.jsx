import React from 'react'
import AdminHeader from './AdminHeader'
import SideHeader from './SideHeader'

const Dashboard = () => {
  return (
    <div className="flex font-custom">
      <SideHeader />
      <AdminHeader />
    </div>
  )
}

export default Dashboard
