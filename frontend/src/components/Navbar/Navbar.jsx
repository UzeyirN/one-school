import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <Link className="navbar-brand" to=''>Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ marginLeft: "25%" }}>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link style={{margin:"0 20px"}} className="nav-link active" aria-current="page" to=''>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link style={{margin:"0 20px"}} className="nav-link active" aria-current="page" to='courses'>Courses</Link>
                            </li>
                            <li className="nav-item">
                                <Link style={{margin:"0 20px"}} className="nav-link active" aria-current="page" to='programs'>Programs</Link>
                            </li>
                            <li className="nav-item">
                                <Link style={{margin:"0 20px"}} className="nav-link active" aria-current="page" to='teachers'>Teachers</Link>
                            </li>
                            <li className="nav-item">
                                <Link style={{margin:"0 20px"}} className="nav-link active" aria-current="page" to='add'>Add</Link>
                            </li>


                        </ul>
                        <form className="d-flex">
                            <button className='nav-btn'>Contact US</button>
                        </form>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Navbar