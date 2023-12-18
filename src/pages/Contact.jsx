import Github from "../assets/github.svg";
import Linkedin from "../assets/linkedin.svg";
import Instagram from "../assets/instagram.svg";
import ContactIcon from "../assets/contact.jpeg";
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div>
            <div className="mt-36 flex items-start md:flex-row flex-col align-self">
                <div className="w-2/3 flex flex-col">
                    <h1 className="text-3xl text-stone-800 font-semibold">Let's Get In Touch!</h1>
                    <div className="text-stone-400 text-lg mt-10 tracking-wide leading-9">   
                       Thank you for expressing your interest in reaching out to me. I appreciate your feedback, questions, and suggestions. If you have specific inquiries or comments, please don't hesitate to email me directly at <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBmWthrBqhFXXmPJqTKkpvHrDgXNCqJmcMwgZlNPlsJHjvdcBMtZsSZSZVbwMBJNsrHFZDt" className="text-stone-700 underline hover:cursor-pointer hover:opacity-50">phamanhdung250204@gmail.com</a>. Alternatively, you can use the contact form on my website by completing the required fields, and I'll get back to you as soon as possible. If you prefer connecting on social media, you can find me on <a href="https://www.instagram.com/dungapham.25/" className="text-stone-700 underline hover:cursor-pointer hover:opacity-50">https://www.instagram.com/dungapham.25/</a> . Thanks again for your interest, and I look forward to hearing from you!
                    </div>
                    <div className="mt-10">
                        <Link className="flex flex-row items-center pb-4 text-md hover:opacity-50 hover:cursor-pointer" to="https://github.com/dungpham2502"><span className="pr-2"><img className="w-8" src={Github} alt="" /></span>Follow on GitHub</Link>
                        <Link className="flex flex-row items-center pb-4 text-md hover:opacity-50 hover:cursor-pointer" to="https://www.linkedin.com/in/dungapham/"><span className="pr-2"><img className="w-8" src={Linkedin} alt="" /></span>Follow on Linkedin</Link>
                        <Link className="flex flex-row items-center text-md hover:opacity-50 hover:cursor-pointer" to="https://www.instagram.com/dungapham.25/"><span className="pr-2"><img className="w-8" src={Instagram} alt="" /></span>Follow on Instagram</Link>
                    </div>
                </div>
                <div className="w-1/3">
                    <img src={ContactIcon} alt="" className="md:ml-12 h-4/5 rounded-xl object-cover"/>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Contact;