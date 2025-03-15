import React from 'react'
import { FaAd, FaCalendar, FaHome, FaList, FaShoppingCart } from 'react-icons/fa'
import { NavLink, Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <div className='flex'>
        <div className="w-64 bg-gray-500">

            <ul className='menu'>
                <li><NavLink to="/dashboard/userHome"><FaHome></FaHome> Home</NavLink></li>
                <li><NavLink to='/dashboard/cart'><FaShoppingCart></FaShoppingCart> MY cart</NavLink></li>
                <li><NavLink to='/dashboard/calander'><FaCalendar></FaCalendar> Calander</NavLink></li>
                <li><NavLink to='/dashboard/review'><FaAd></FaAd> Add a review</NavLink></li>

                <li><NavLink to='/dashboard/boking'><FaList> </FaList> My booking </NavLink></li>
            </ul>
        </div>
        <div className='flex-1'>
            <Outlet></Outlet>
        </div>
    </div>
  )
}

export default Dashboard