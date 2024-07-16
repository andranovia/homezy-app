
import HomeAgentsItem from "./HomeAgentsItem";

const HomeAgents = () => {
    return (
        <div className="container">
            <div className="agents__wrapper">
                <div className="agents__header">
                    <h2>Meet Our Agent</h2>
                    <span>Browse All Agents</span>
                </div>
                <div className="card__wrapper--grid ">
                    <HomeAgentsItem/>
                    <HomeAgentsItem/>
                    <HomeAgentsItem/>
                    <HomeAgentsItem/>
                    <HomeAgentsItem/>
                    <HomeAgentsItem/>
                </div>
            </div>
        </div>
    );
};

export default HomeAgents;
