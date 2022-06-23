import { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/logo.png";

const NavbarItem = ({ title, classProps, handleClick }) => (
  <li onClick={handleClick} className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>
);

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="w-full flex justify-between md:justify-center items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>

      <ul className="text-white md:flex hidden list-none justify-between items-center flex-initial">
        {["Market", "Exchange", "Tutorial", "Wallets"].map((item, index) => (
          <div
            key={item + index}
            className="w-full flex flex-col justify-center items-center "
          >
            <div className=" w-2 h-2 rounded-full bg-transparent hover:bg-white" />
            <NavbarItem title={item} />
          </div>
        ))}
        <li className="bg-[#2952e3] py-2 mt-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Login
        </li>
      </ul>

      <div className="flex relative ">
        {toggleMenu ? ( <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer " onClick={() => setToggleMenu(false)} /> ) 
        : ( <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer " onClick={() => setToggleMenu(true)} />
        )}

        {toggleMenu && (
          <ul className=" flex flex-col z-10 fixed top-0 right-0 w-[75vw] h-screen p-4 blue-glassmorphism  rounded-md shadow-2xl md:hidden list-none">
            <li className="py-2 px-4 flex justify-end">
              <AiOutlineClose fontSize={28} className="text-white" onClick={() => setToggleMenu(false)} />
            </li>

            {["Market", "Exchange", "Tutorial", "Wallets"].map((item, index) => (
              <NavbarItem
                handleClick={() => setToggleMenu(false)}
                key={item + index}
                title={item}
                classProps={"text-white my-4 text-3xl"}
              />
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
