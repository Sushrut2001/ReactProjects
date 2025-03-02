import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="bg-black text-white flex justify-center">
                <ul className="flex justify-between gap-5 p-4">
                    <li><Link to={"/"}>State</Link></li>
                    <li><Link to={"/effect"}>Effect</Link></li>
                    <li><Link to={"/reducer"}>Reducer</Link></li>
                
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;