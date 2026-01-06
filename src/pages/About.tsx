import Navbar from "../components/Navbar.tsx";
import Profile from "../assets/profile.svg";
import Discord from "../assets/discord.svg";
import Email from "../assets/email.svg";
import Github from "../assets/github.svg";
import Linkedin from "../assets/linkedin.svg";
import LeftGear from "../assets/leftgear.svg";
import '../styles/About.css';
import ProfilePicture from '../assets/profilePicture.jpg';

function About() {
    return (
        <div className="about-page">
            <Navbar />

            <div className="about-container">
                <div className="about-header">
                    <img src={ProfilePicture} className="profile-picture" />

                    <p className="info-text-1">
                        Hello, I’m Shivesh, a computer science student at UT Dallas trying to learn
                        front-end and design.
                    </p>
                </div>

                <p className="description">
                    Over the past few years, I have developed a growing focus on front-end development and UI design. I enjoy turning ideas into clean, responsive interfaces and learning how thoughtful design choices improve usability and accessibility. Through personal projects and coursework, I’ve been building experience with modern web technologies while continuously refining my visual and interaction design skills.
                </p>

                <div className="about-actions">
                    <button
                        className={"my-resume-button"}
                        onClick={() => {
                            window.open("https://docs.google.com/document/d/1tq3HxHLpGtCVmzGoEBMDdKvfved3kY7LGHv-76l4NM8/edit?tab=t.0", "_blank", "noopener,noreferrer")
                        }}
                    >
                        My Resume
                    </button>
                    <div className="social-icons">
                        <a
                            href="mailto:shivesh.gupta.1@outlook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={Email} alt={"Email icon"}/>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/shivesh-gupta-397973296/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={Linkedin} alt={"Linkedin icon"}/>
                        </a>

                        <a
                            href="https://discordapp.com/channels/@me/shiveshgupta/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={Discord} alt={"Discord icon"}/>
                        </a>

                        <a
                            href="https://github.com/SGcoder120/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={Github} alt={"Github icon"}/>
                        </a>
                    </div>
                </div>
                <img src={LeftGear} className="left-gear-right" />
            </div>
        </div>

    );
}

export default About;