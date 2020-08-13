import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <div className="nav">
                <NavLink className="logo" to="/">iwillnevereatatsubwayagain.com</NavLink>
          <div className="links">
                    <NavLink className="link" to="/products" style={{margin:'5px'}}>Products</NavLink>
                    <NavLink className="link" to="/donate">Donate</NavLink>
                </div>
            </div>
        </nav>
    )

}

export default Nav