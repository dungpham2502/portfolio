import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex justify-center">
            <div className="flex shrink-0 justify-center space-x-10 shadow-xl px-10 py-3 mt-5 rounded-full">
                <Link className="text-sm transition-color duration-100 hover:delay-150 hover:text-gray-300" to='/'>Home</Link>
                <Link className="text-sm transition-color duration-100 hover:delay-150 hover:text-gray-300" to='/about'>About</Link>
                <Link className="text-sm transition-color duration-100 hover:delay-150 hover:text-gray-300" to='/projects'>Projects</Link>
                <Link className="text-sm transition-color duration-100 hover:delay-150 hover:text-gray-300" to='/contact'>Contact</Link>
            </div>
        </nav>
       
    )
}

export default Navbar;

