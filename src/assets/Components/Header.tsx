import { Link, NavLink } from "react-router-dom"

interface HeaderProps{
    onActivePageChange: (page: string) => void
}

export default function Header({ onActivePageChange } : HeaderProps ) {
    const changeActivePage = (newPage: string) =>
    {
        onActivePageChange(newPage)
    }
    return (
        <header className="site-header">
            <Link onClick={() => changeActivePage('home')} className="site-title" to="/">Abdurrahmaan Baghdadi</Link>
            <nav className="site-pages-list">
                <NavLink onClick={() => changeActivePage('home')} className="site-page-link" to="/">Home</NavLink>
                <NavLink onClick={() => changeActivePage('projects')} className="site-page-link" to="projects">Projects</NavLink>
                <NavLink onClick={() => changeActivePage('about-me')} className="site-page-link" to="aboutMe">About</NavLink>
                <NavLink onClick={() => changeActivePage('skills')} className="site-page-link" to="skills">Skills</NavLink>
                <NavLink onClick={() => changeActivePage('contact')} className="site-page-link" to="contact">Contact</NavLink>
            </nav>
        </header>
    )
}