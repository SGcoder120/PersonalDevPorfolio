import Navbar from "../components/Navbar.tsx";
import Project from "../components/Project.tsx";
import GithubIcon from "../assets/github.svg"
import ToyotaPreview from "../assets/toyotaPreview.png"
import RightGear from "../assets/rightgear.svg";
import "../styles/Projects.css";

function Projects() {
    return (
        <div>
            <Navbar />
            <p className={"info-text-project"}>Here are some projects I have made over the past few years. Enjoy!</p>
            <section className={"projects-grid"}>
                <Project
                    title={"Toyota Project 2025"}
                    description={"Toyota Project 2025 is a collaborative software project focused on building a scalable, modular application using modern development practices and version control workflows."}
                    image_url={ToyotaPreview}
                    svg={GithubIcon}
                    src_link={"https://github.com/SGcoder120/Toyota-Project-2025"}
                    project_link={"https://toyota-project-2025.vercel.app/"}
                />
                <Project
                    title={"Toyota Project 2025"}
                    description={"Toyota Project 2025 is a collaborative software project focused on building a scalable, modular application using modern development practices and version control workflows."}
                    image_url={ToyotaPreview}
                    svg={GithubIcon}
                    src_link={"https://github.com/SGcoder120/Toyota-Project-2025"}
                    project_link={"https://toyota-project-2025.vercel.app/"}
                />
                <Project
                    title={"Toyota Project 2025"}
                    description={"Toyota Project 2025 is a collaborative software project focused on building a scalable, modular application using modern development practices and version control workflows."}
                    image_url={ToyotaPreview}
                    svg={GithubIcon}
                    src_link={"https://github.com/SGcoder120/Toyota-Project-2025"}
                    project_link={"https://toyota-project-2025.vercel.app/"}
                />
                <Project
                    title={"Toyota Project 2025"}
                    description={"Toyota Project 2025 is a collaborative software project focused on building a scalable, modular application using modern development practices and version control workflows."}
                    image_url={ToyotaPreview}
                    svg={GithubIcon}
                    src_link={"https://github.com/SGcoder120/Toyota-Project-2025"}
                    project_link={"https://toyota-project-2025.vercel.app/"}
                />
                <Project
                    title={"Toyota Project 2025"}
                    description={"Toyota Project 2025 is a collaborative software project focused on building a scalable, modular application using modern development practices and version control workflows."}
                    image_url={ToyotaPreview}
                    svg={GithubIcon}
                    src_link={"https://github.com/SGcoder120/Toyota-Project-2025"}
                    project_link={"https://toyota-project-2025.vercel.app/"}
                />
                <Project
                    title={"Toyota Project 2025"}
                    description={"Toyota Project 2025 is a collaborative software project focused on building a scalable, modular application using modern development practices and version control workflows."}
                    image_url={ToyotaPreview}
                    svg={GithubIcon}
                    src_link={"https://github.com/SGcoder120/Toyota-Project-2025"}
                    project_link={"https://toyota-project-2025.vercel.app/"}
                />
                <Project
                    title={"Toyota Project 2025"}
                    description={"Toyota Project 2025 is a collaborative software project focused on building a scalable, modular application using modern development practices and version control workflows."}
                    image_url={ToyotaPreview}
                    svg={GithubIcon}
                    src_link={"https://github.com/SGcoder120/Toyota-Project-2025"}
                    project_link={"https://toyota-project-2025.vercel.app/"}
                />
                <Project
                    title={"Toyota Project 2025"}
                    description={"Toyota Project 2025 is a collaborative software project focused on building a scalable, modular application using modern development practices and version control workflows."}
                    image_url={ToyotaPreview}
                    svg={GithubIcon}
                    src_link={"https://github.com/SGcoder120/Toyota-Project-2025"}
                    project_link={"https://toyota-project-2025.vercel.app/"}
                />
                <Project
                    title={"Toyota Project 2025"}
                    description={"Toyota Project 2025 is a collaborative software project focused on building a scalable, modular application using modern development practices and version control workflows."}
                    image_url={ToyotaPreview}
                    svg={GithubIcon}
                    src_link={"https://github.com/SGcoder120/Toyota-Project-2025"}
                    project_link={"https://toyota-project-2025.vercel.app/"}
                />
            </section>
            <img src={RightGear} className={"right-gear-left"} />
        </div>
    );
}

export default Projects