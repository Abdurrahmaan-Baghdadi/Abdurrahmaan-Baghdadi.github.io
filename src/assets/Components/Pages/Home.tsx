import { useNavigate, useOutletContext } from 'react-router-dom'
import { HeaderProps } from '../../types'


function Home()
{
    const navigate = useNavigate()
    const { setActivePage } = useOutletContext<HeaderProps>()
    const handleNavigate = (page: string, lineRefs: SVGLineElement[]) => {
        setActivePage(page)
        lineRefs.forEach(line => line.classList.add('animate'))
        setTimeout(()=>{
            navigate(`/${page}`)
        }, 500)
        
    }

    return (
        <>
            <div id="container">
                <div id="center">
                    <div id="main-square"></div>
                        {/* Lines extending horizontally from the sides */}

                        {/*About Me*/}
                        <div className='unit'>
                            <svg id="circuit-lines" width="100%" height="100%">
                                <line x1="350px" y1="30%" x2="250px" y2="30%" className="line" />
                                <line x1="250px" y1="30%" x2="250px" y2="80px" className="line" />
                                <line x1="250px" y1="80px" x2="200px" y2="80px" className="line" />
                            </svg>
                            <div className="dot" onClick={() => handleNavigate("aboutMe")} style={{ top: "80px", left: "200px" }}>
                                <span className="dot-label">About Me</span>
                            </div>
                        </div>

                        {/*Projects*/}
                        <div className='unit'>
                            <svg id="circuit-lines" width="100%" height="100%">
                                <line x1="650px" y1="30%" x2="750px" y2="30%" className="line" />
                                <line x1="750px" y1="30%" x2="750px" y2="80px" className="line" />
                                <line x1="750px" y1="80px" x2="800px" y2="80px" className="line" />
                            </svg>
                            <div className="dot" onClick={() => handleNavigate("projects")} style={{ top: "80px", left: "800px" }}>
                                <span className="dot-label"  style={{ transform: 'translate(50%, -150%)' }}>Projects</span>
                            </div>
                        </div>
                        {/*Skills*/}
                        <div className='unit'>
                            <svg id="circuit-lines" width="100%" height="100%">
                                <line x1="650px" y1="70%" x2="750px" y2="70%" className="line" />
                                <line x1="750px" y1="70%" x2="750px" y2="420px" className="line" />
                                <line x1="750px" y1="420px" x2="800px" y2="420px" className="line" />
                            </svg>
                            <div className="dot" onClick={() => handleNavigate("skills")} style={{  top: "420px", left: "800px"}}>
                                <span className="dot-label" style={{ transform: 'translate(50%, -150%)'}}>Skills</span>
                            </div>
                        </div>
                        {/*Contact*/}
                        <div className='unit'>
                            <svg id="circuit-lines" width="100%" height="100%">
                                <line x1="350px" y1="70%" x2="250px" y2="70%" className="line" />
                                <line x1="250px" y1="70%" x2="250px" y2="420px" className="line" />
                                <line x1="250px" y1="420px" x2="200px" y2="420px" className="line" />
                            </svg>
                            <div className="dot" onClick={() => handleNavigate("contact")} style={{ top: "420px", left: "200px" }}>
                                <span className="dot-label">Contact</span>
                            </div>
                        </div>
                        <svg id="circuit-lines" width="100%" height="100%">
                            <line x1="350px" y1="25%" x2="325px" y2="25%" className="basic-wire"/>
                            <line x1="350px" y1="35%" x2="325px" y2="35%" className="basic-wire"/>
                            <line x1="350px" y1="40%" x2="325px" y2="40%" className="basic-wire"/>
                            <line x1="350px" y1="45%" x2="325px" y2="45%" className="basic-wire"/>
                            <line x1="350px" y1="50%" x2="325px" y2="50%" className="basic-wire"/>
                            <line x1="350px" y1="55%" x2="325px" y2="55%" className="basic-wire"/>
                            <line x1="350px" y1="60%" x2="325px" y2="60%" className="basic-wire"/>
                            <line x1="350px" y1="65%" x2="325px" y2="65%" className="basic-wire"/>
                            <line x1="350px" y1="75%" x2="325px" y2="75%" className="basic-wire"/>
                            <line x1="650px" y1="25%" x2="675px" y2="25%" className="basic-wire"/>
                            <line x1="650px" y1="35%" x2="675px" y2="35%" className="basic-wire"/>
                            <line x1="650px" y1="40%" x2="675px" y2="40%" className="basic-wire"/>
                            <line x1="650px" y1="45%" x2="675px" y2="45%" className="basic-wire"/>
                            <line x1="650px" y1="50%" x2="675px" y2="50%" className="basic-wire"/>
                            <line x1="650px" y1="55%" x2="675px" y2="55%" className="basic-wire"/>
                            <line x1="650px" y1="60%" x2="675px" y2="60%" className="basic-wire"/>
                            <line x1="650px" y1="65%" x2="675px" y2="65%" className="basic-wire"/>
                            <line x1="650px" y1="75%" x2="675px" y2="75%" className="basic-wire"/>
                        </svg>
                </div>
            </div>
        </>
    )
}

export default Home