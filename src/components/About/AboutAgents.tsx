import AboutAgentsCard from "./AboutAgentsCard"

const AboutAgents = () => {
    return (
        <div className="container">
            <div className="about__agents--wrapper">
                <div className="about__agents--header">
                    <h2>Meet Our Teams</h2>
                </div>
                <div className="card__wrapper--grid card__wrapper--grid__col--4 about__agents--contents">   

                    <AboutAgentsCard /> 
                    <AboutAgentsCard /> 

                    <AboutAgentsCard /> 

                    <AboutAgentsCard /> 

                </div>
            </div>
        </div>
    )
}

export default AboutAgents