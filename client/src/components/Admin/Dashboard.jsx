import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const Dashboard = () => {
  const auth = useSelector((state) => state.auth);
  if (auth.isAdmin === false) {
    return <Navigate to='/' replace />
  }

  return (
    <div className='dashboard'>
      <div className='side_nav'>
        <h3>Quick Links</h3>
        <NavLink
          className={({ isActive }) => isActive ? "link-active" : "link-inactive"}
          to='/admin/products'
        >
          Products
        </NavLink>

        <NavLink
          className={({ isActive }) => isActive ? "link-active" : "link-inactive"}
          to='/admin/orders'
        >
          Orders
        </NavLink>

        <NavLink
          className={({ isActive }) => isActive ? "link-active" : "link-inactive"}
          to='/admin/users'
        >
          Users
        </NavLink>
      </div>

      <div className='content_admin'>
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard;