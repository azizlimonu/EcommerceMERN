import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Products = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className='admin_headers'>
        <h2>Products</h2>
        <button onClick={() => navigate('/admin/products/create-products')}>
          Create
        </button>
      </div>
      <Outlet />
    </>
  )
}

export default Products