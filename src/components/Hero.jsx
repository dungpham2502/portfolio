import FbLogo from "../assets/facebook.svg";
import IgLogo from "../assets/instagram.svg";
import LiLogo from "../assets/linkedin.svg";
import GhubLogo from "../assets/github.svg";
import Image1 from "../assets/image1.avif"
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="mt-36 items-start flex md:flex-row flex-col align-self">
            <div className="w-1/2 flex flex-col">
                <h1 className="text-4xl text-stone-800 font-bold">College student, tech enthusiast, internship seeker, and software engineer wannabe</h1>
                <div className="text-stone-400 text-lg mt-10 tracking-wide leading-8">
                    I'm a Computer Science major at the University of South Florida, driven by a passion for technology. Originally from Vietnam, I'm on a quest to learn new skills, solve complex problems, and embrace best practices in software engineering. As an internship seeker, I'm eager to apply my knowledge to real-world projects and contribute to innovative solutions. My goal is to become a skilled software engineer, and I'm excited about the opportunities ahead.
                </div>
                <div className="flex flex-row space-x-7 mt-8">
                    <Link className="w-7 hover:cursor-pointer hover:opacity-25" to="https://github.com/dungpham2502"><img src={GhubLogo} alt="" /></Link>
                    <Link className="w-7 hover:cursor-pointer hover:opacity-25" to="https://www.linkedin.com/in/dungapham/"><img src={LiLogo} alt="" /></Link>
                    <Link className="w-7 hover:cursor-pointer hover:opacity-25" to="https://www.facebook.com/profile.php?id=100014983413135"><img src={FbLogo} alt="" /></Link>
                    <Link className="w-7 hover:cursor-pointer hover:opacity-25" to="https://www.instagram.com/dungapham.25/"><img src={IgLogo} alt="" /></Link>
                </div>
            </div>
            <div className="w-1/2">
                <img src={Image1} alt="" className="md:ml-12 h-full md:w-5/6 rounded-xl object-cover"/>
            </div>
        </div>
    )
}

export default Hero;