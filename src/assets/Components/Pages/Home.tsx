import schoolImage from '../../images/UTSA_logo.png'


function Home()
{
    return (
        <>
            <div className='page-container'>
            <p className='home-text'>Upcoming Austin Software Developer<br />Graduated from the University of Texas at San Antonio May 2024</p>
            <img style={{height: "50%", width: "50%"}} src={schoolImage} />
            </div>
        </>
    )
}

export default Home