import ProjectList from "../components/ProjectList";

const Projects = () => {
    return (
        <div>
            <div className="mt-36 items-center flex items-start md:flex-row flex-col align-self">
                <div className="w-2/3 flex flex-col">
                    <h1 className="text-3xl text-stone-800 font-semibold">Take A Look At My Projects!</h1>
                    <div className="text-stone-400 text-lg mt-8 tracking-wide leading-9">   
                        I've been making  several projects, and I'm excited about what I've been able to make. If you're curious about what I've been up to, take a look at the code and share your thoughts on how we can make things even better. I believe in the power of collaboration, and I'm always eager to hear new ideas and feedback. Let's learn and grow together!
                    </div>
                </div>
            </div>
            <ProjectList />
        </div>
    )
}

export default Projects;