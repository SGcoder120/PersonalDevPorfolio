import Navbar from "../components/Navbar";
import Token from '../assets/token.svg';
import LeftGear from '../assets/leftgear.svg';
import RightGear from '../assets/rightgear.svg';
import '../styles/Home.css'

function Home() {
    return (
        <div className={"home-page"}>
            <Navbar />
            <p className={"text-info-1"}>Hi there! I am Shivesh Gupta and I am a computer science student at UTD, and I am really into front-end and design!</p>
            <img src={Token} className={"token-middle"} />
            <p className={"text-info-2"}>Here, you can find my projects, my socials and even some fun stuff I do even!</p>
            <img src={LeftGear} className={"left-gear"} />
            <img src={RightGear} className={"right-gear"} />
        </div>
    );
}

export default Home;