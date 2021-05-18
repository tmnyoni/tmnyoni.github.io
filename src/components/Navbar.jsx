import React from 'react'

const Navbar = (props) =>{
    return (
        <ul className="nav justify-content-center align-items-center" style={{height: 75}}>
            <li className="nav-item">
                <a className="nav-link text-dark active fw-bolder" aria-current="page" href="#">tmnyoni</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-dark" href="#">skills</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-dark" href="#">projects</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-dark" href="#">about me</a>
            </li>
        </ul>
    )
}

export default Navbar;