const Navbar = () => {
    return(
        <div>
           <nav className="flex justify-between p-2">
            <h1 className="text-2xl font-semibold">LoGo</h1>
            <ul className="flex ">
                <li className="mx-[30px] cursor-pointer hover:underline">Home</li>
                <li className="mx-[30px] cursor-pointer hover:underline">Purchase</li>
                <li className="mx-[30px] cursor-pointer hover:underline">About Us</li>
                <li className="mx-[30px] cursor-pointer hover:underline">Contact Us</li>
            </ul>
           </nav>

        </div>
    )
}
export default Navbar;