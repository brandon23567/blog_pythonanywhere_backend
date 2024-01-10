import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <div className='navbar_outer_main_container'>
            <div className='container'>
                <div className='logo_container'>
                    <h2>BlogThingy</h2>
                </div>

                <ul className='navbar_links'>
                    <li>
                        <Link to="/home" className='actual_link'>Home</Link>
                    </li>
                    <li>
                        <Link to="/home/post_upload" className='actual_link'>Upload</Link>
                    </li>
                    <li>
                        <Link to="" className='actual_link'>Categories</Link>
                    </li>
                    <li>
                        <Link to="" className='actual_link'>Signout</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar