import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


 class Navbar extends Component {
  render() {
    return (
      <div className='bg-gray-700 text-black pt-3 pb-2 h-12 '>
        <NavLink to='Location'>Where in the World?</NavLink>
      </div>
    )
  }
}
export default Navbar
