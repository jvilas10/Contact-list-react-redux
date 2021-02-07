import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar shadow fixed-top navbar-expand navbar-dark bg-primary">
            <div className="container">
                <Link to="/" href="#"><h5>Contact Book</h5></Link>
                
                <div>
                <Link to="/" className="">Create List</Link>
                    <Link to="/contacts/add" className="">Create Contact</Link>
                </div>

            </div>
        </nav>
    )
}

export default Navbar
