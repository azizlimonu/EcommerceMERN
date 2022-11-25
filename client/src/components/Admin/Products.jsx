import React from 'react'
import { Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <>
      <div>This is Products page</div>
      <Outlet />
    </>
  )
}

export default Products