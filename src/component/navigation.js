import React from 'react'
import { NavLink } from 'react-router-dom'

const navigation = () => {
  return (
    <div>
      <NavLink to="/" className="view">main</NavLink>
      <NavLink to="/Details" className="view">Details</NavLink>
    </div>
  )
}

export default navigation
