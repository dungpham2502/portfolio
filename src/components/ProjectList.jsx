import { projects } from '../data.js';
import { Link } from 'react-router-dom';

const ProjectList = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24">
        {projects && projects.map((project) => (
            <Link key={project.id} className="px-3 py-5 hover:bg-gray-50 hover:rounded-lg hover:cursor-pointer" to={project.link}>
                <img className="w-8" src={project.imgSource} alt="" />
                <h1 className="font-bold text-xl my-6 text-stone-700">{project.title}</h1>
                <div className="text-base text-stone-400 ">
                    {project.description}
                </div>
                <div className="mt-8 text-sm font-semibold text-stone-600 hover:text-stone-400">
                View Project
                </div>
            </Link>
        ))}
    </div>
  );
}

export default ProjectList;
