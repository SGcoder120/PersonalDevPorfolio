import Navbar from "../components/Navbar.tsx";
import ProjectCard from "../components/ProjectCard.tsx";
import GithubIcon from "../assets/github.svg";
import FigmaIcon from "../assets/figma.svg";
import ToyotaPreview from "../assets/toyotaPreview.png";
import RightGear from "../assets/rightgear.svg";
import utdClubsImg from "../assets/utdClubsImg.png";
import "../styles/Projects.css";

function Projects() {
    return (
        <div>
            <Navbar />
            <p className={"info-text-project"}>Here are some projects I have contributed to and/or made over the past few years. Enjoy!</p>
            <section className={"projects-grid"}>
                <ProjectCard
                    title="UTD Clubs Platform"
                    description="A centralized web platform for discovering student organizations at UT Dallas. The project streamlines club exploration by providing searchable listings, structured club information, and an intuitive interface for students to connect with campus communities."
                    image_url={utdClubsImg}
                    svg={GithubIcon}
                    src_link="https://github.com/UTDNebula/utd-clubs"
                    project_link="https://clubs.utdnebula.com/"
                />
                <ProjectCard
                    title={"Toyota Vehicle Finder"}
                    description={"Toyota Vehicle Finder is a collaborative software project focused on building a scalable, modular application using modern development practices and version control workflows."}
                    image_url={ToyotaPreview}
                    svg={GithubIcon}
                    src_link={"https://github.com/SGcoder120/Toyota-Vehicle-Finder"}
                    project_link={"https://toyota-vehicle-finder.vercel.app/"}
                />
                <ProjectCard
                    title={"Toyota Vehicle Finder"}
                    description={"Toyota Vehicle Finder is a collaborative software project focused on building a scalable, modular application using modern development practices and version control workflows."}
                    image_url={ToyotaPreview}
                    svg={GithubIcon}
                    src_link={"https://github.com/SGcoder120/Toyota-Vehicle-Finder"}
                    project_link={"https://toyota-vehicle-finder.vercel.app/"}
                />  
            </section>
            <img src={RightGear} className={"right-gear-left"} />
        </div>
    );
}

export default Projects