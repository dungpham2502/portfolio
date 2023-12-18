import Avatar from "../assets/avatar.png"
import Mail from "../assets/mail-icon.jpeg"
import Github from "../assets/github.svg";
import Linkedin from "../assets/linkedin.svg";
import Instagram from "../assets/instagram.svg";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="mt-36 items-start flex justify-center md:flex-row flex-col align-self">
            <div className="w-2/3 flex flex-col">
                <h1 className="text-3xl text-stone-800 font-semibold">Hi, I'm Dung Pham! I'm currently a freshman at University of South Florida, pursuing a degree in Computer Science</h1>
                <div className="text-stone-400 text-lg mt-10 tracking-wide leading-9">   
                    During my first year in college, I've been making various projects that I'm excited about and proud of. These projects reflect the progress I've made in my coding journey. If you're curious about any of them, I encourage you to explore the code and share any suggestions or improvements you might have in mind. Collaboration is a fantastic opportunity for learning and growth, and I'm always eager to welcome new ideas and feedback from fellow students.
                </div>
                <Link className="flex items-center mt-8 hover:opacity-50 hover:cursor-pointer" to="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBmWthrBqhFXXmPJqTKkpvHrDgXNCqJmcMwgZlNPlsJHjvdcBMtZsSZSZVbwMBJNsrHFZDt">
                    <img className="w-14" src={Mail} alt="" />
                    <div className="text-lg text-stone-600">phamanhdung250204@gmail.com</div>
                </Link>
                <div className="mt-10">
                    <Link className="flex flex-row items-center pb-4 text-md hover:opacity-50 hover:cursor-pointer" to="https://github.com/dungpham2502"><span className="pr-2"><img className="w-8" src={Github} alt="" /></span>Follow on GitHub</Link>
                    <Link className="flex flex-row items-center pb-4 text-md hover:opacity-50 hover:cursor-pointer" to="https://www.linkedin.com/in/dungapham/"><span className="pr-2"><img className="w-8" src={Linkedin} alt="" /></span>Follow on Linkedin</Link>
                    <Link className="flex flex-row items-center text-md hover:opacity-50 hover:cursor-pointer" to="https://www.instagram.com/dungapham.25/"><span className="pr-2"><img className="w-8" src={Instagram} alt="" /></span>Follow on Instagram</Link>
                </div>
            </div>
            <div className="w-1/3">
                <img src={Avatar} alt="" className="md:ml-12 h-4/5 md:w-5/6 rounded-xl object-cover"/>
            </div>
        </div>
    )
}

export default About;