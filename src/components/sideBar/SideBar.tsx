import { Link, NavLink } from "react-router-dom";
import { IoMdAddCircleOutline } from "react-icons/io";

import logo from "../../assets/ai.png";
import { BiMessageRoundedDetail } from "react-icons/bi";
const SideBar = () => {
  return (
    <div className=" hidden lg:flex group w-10  first-letter:h-[100vh] ">
      <img src={logo} alt="" className="absolute  w-20 top-2 cursor-pointer" />

      <div
        className={` -translate-x-full fixed top-0 left-0 px-1 group-hover:translate-x-0 h-full w-64 bg-white bg-opacity-85 shadow-lg backdrop-blur-xl overflow-hidden rounded-e-3xl scale-y-[99%] border-[1px] border-gray-700/15 transition-all duration-200`}
      >
        <img
          src={logo}
          alt=""
          className="  w-20 cursor-pointer  object-cover  "
        />
        <Link to={"#"}>
          {" "}
          <button className=" flex  items-center gap-1 my-4 text-lg text-start hover:bg-slate-400/30 w-full rounded-md px-1">
            <IoMdAddCircleOutline />
            Start a new chat
          </button>
        </Link>
        <div className="  h-full px-2 space-y-2">
          <h2 className="font-semibold">Recents</h2>
          <ul className="space-y-1">
            <li>
              <Link to={"#"}>
                {" "}
                <span className=" flex items-center gap-1 font-extralight hover:bg-slate-400/30 rounded-md px-1 ">
                  <span className="translate-y-[3px]">
                    <BiMessageRoundedDetail size={13} />
                  </span>
                  message for you
                </span>{" "}
              </Link>
            </li>

            <li>
              <NavLink to="/chat">chat</NavLink>
            </li>
            <li>
              <a href="/">home</a>
            </li>
            <li>
              <NavLink to="/history">history</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
