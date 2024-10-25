import react from 'react'
import { Link, NavLink } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <Link className="site-title" to="/">Abdurrahmaan Baghdadi</Link>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </nav>
        </header>
    )
}