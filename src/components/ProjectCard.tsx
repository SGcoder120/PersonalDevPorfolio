import "../styles/ProjectCard.css";
import LinkIcon from "../assets/link.svg";

type ProjectProps = {
    title: string;
    description: string;
    image_url: string;
    svg: string;
    src_link: string;
    project_link: string;
};

function ProjectCard({
    title,
    description,
    image_url,
    svg,
    src_link,
    project_link,
}: ProjectProps) {
    return (
        <div className="project-frame">
            <img src={image_url} className="project-thumbnail" />

            <div className="project-content">
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>
            </div>

            <div className="project-footer">
                <a
                    href={project_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-demo"
                >
                    <img src={LinkIcon} alt="Link" className="project-icon-demo"/>
                </a>

                <a
                    href={src_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-source"
                >
                    <img src={svg} alt="GitHub" className="project-icon-source" />
                </a>
            </div>
        </div>
    );
}

export default ProjectCard;
