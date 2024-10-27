import { useNavigate, useOutletContext } from 'react-router-dom'
import { HeaderProps } from '../../types'


function Home()
{
    const navigate = useNavigate()
    const { setActivePage } = useOutletContext<HeaderProps>()
    const handleNavigate = (page: string) => {
        setActivePage(page)
        navigate(`/${page}`)
    }

    return (
        <>
            <div id="container">
                <div id="center">
                    <div id="main-square"></div>
                    <svg id="circuit-lines" width="100%" height="100%">
                        {/* Lines extending horizontally from the sides */}
                        <line x1="80%" y1="30%" x2="120%" y2="30%" className="line" />
                        <line x1="20%" y1="30%" x2="-20%" y2="30%" className="line" />
                        <line x1="80%" y1="70%" x2="120%" y2="70%" className="line" />
                        <line x1="20%" y1="70%" x2="-20%" y2="70%" className="line" />
                    </svg>

                {/* Dot with Label */}
                <div className="dot" onClick={() => handleNavigate("projects")} style={{ top: "30%", left: "100%" }}>
                    <span className="dot-label">Projects</span>
                </div>
                <div className="dot" onClick={() => handleNavigate("aboutMe")} style={{ top: "30%", left: "0%" }}>
                    <span className="dot-label">About Me</span>
                </div>
                <div className="dot" onClick={() => handleNavigate("skills")} style={{ top: "70%", left: "100%" }}>
                    <span className="dot-label">Skills</span>
                </div>
                <div className="dot" onClick={() => handleNavigate("contact")} style={{ top: "70%", left: "0%" }}>
                    <span className="dot-label">Contact</span>
                </div>
                </div>
            </div>
        </>
    )
}

export default Home