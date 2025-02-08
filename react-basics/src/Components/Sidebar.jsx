import { IoHome } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoChatboxEllipses } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";
import { FaSignOutAlt } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

const Sidebar = () => {
    return(
        <div className="sidebar fixed h-screen bg-blue-950 w-60 rounded-e-xl p-3">
                <div className="p-4 text-2xl">
                  <p className="text-3xl text-center text-white">Sidebar</p>
                  <div className="w-[200px] border-b-4 rounded-xl"></div>
                </div>
                <div className="flex flex-row items-center p-1 bg-slate-400 rounded-xl text-white">
                  <span className="text-white text-xl "><IoSearch /></span>
                  <input type="text" className="w-full ml-3 bg-transparent focus:outline-none " placeholder="search" />
                </div>
                <div className="flex flex-col text-center">
                  <div className="flex flex-row my-5 duration-[400ms] text-white hover:bg-indigo-600 rounded-lg p-4">
                    <span className="mt-1 mx-2 text-xl"><IoHome /></span>
                    <h1 className="text-xl font-semibold">Home</h1>
                  </div>
                  <div className="flex flex-row duration-[400ms] text-white hover:bg-indigo-600 rounded-lg p-4">
                    <span className="mt-1 mx-2 text-xl"><FaBookmark /></span>
                    <h1 className="text-xl font-semibold">Bookmark</h1>
                  </div>
                  <div className="flex flex-row my-5 duration-[400ms] text-white hover:bg-indigo-600 rounded-lg p-4 hover:text-white">
                    <span className="mt-1 mx-2 text-2xl"><IoMdMail /></span>
                    <h1 className="text-xl font-semibold">Messages</h1>
                  </div>
                  <div className="flex flex-row duration-[400ms] text-white hover:bg-indigo-600 rounded-lg p-4">
                    <span className="mt-1 mx-2 text-2xl"><IoChatboxEllipses /></span>
                    <h1 className="text-xl font-semibold">Chat</h1>
                    <span className="mt-1 ml-[90px] text-2xl"><IoIosArrowUp /></span>
                  </div>
                  <div className="flex flex-row my-5 duration-[400ms] text-white hover:bg-indigo-600 rounded-lg py-4">
                    <span className="mr-2 mt-1 ml-7 text-2xl"><FaSignOutAlt /></span>
                    <h1 className="text-xl font-semibold">Logout</h1>
                  </div>
                </div> 
              </div>
    )
}
export default Sidebar