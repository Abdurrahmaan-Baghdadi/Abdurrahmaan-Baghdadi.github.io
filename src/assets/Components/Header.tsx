import { Link, NavLink } from "react-router-dom"

export default function Header() {
    return (
        <header className="site-header">
            <Link className="site-title" to="/">Abdurrahmaan Baghdadi</Link>
            <nav className="site-pages-list">
                <NavLink className="site-page-link" to="/">Home</NavLink>
                <NavLink className="site-page-link" to="projects">Projects</NavLink>
                <NavLink className="site-page-link" to="aboutMe">About</NavLink>
                <NavLink className="site-page-link" to="skills">Skills</NavLink>
                <NavLink className="site-page-link" to="contact">Contact</NavLink>
            </nav>
        </header>
    )
}