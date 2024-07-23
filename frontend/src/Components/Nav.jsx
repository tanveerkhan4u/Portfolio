import { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import logo from '../images/logo.png' 

const Nav = () => {
  const [click, setclick] = useState(false);

  const closeNav = () => {
    setclick(false)
  };


  const handleClick = () => {
    setclick(!click);
  }
  const content = <>
    <div className="lg:hidden block absolute top-20 w-full left-0 right-0 bg-slate-900 transition">
      <ul className="text-center text-xl p-20">
        <Link spy={true} smooth={true}   to="Home">
        <li className="my-4 py-4 border-b border-[#638ed4] hover:bg-[#638ed4] hover:rounded" onClick={closeNav}>Home</li>
        </Link>
        <Link spy={true} smooth={true}  to="About">
        <li className="my-4 py-4 border-b border-[#638ed4] hover:bg-[#638ed4] hover:rounded"  onClick={closeNav}>About</li>
        </Link>
        <Link spy={true} smooth={true}  to="Services">
        <li className="my-4 py-4 border-b border-[#638ed4] hover:bg-[#638ed4] hover:rounded" onClick={closeNav}>Services</li>
        </Link>
        <Link spy={true} smooth={true}  to="Projects">
        <li className="my-4 py-4 border-b border-[#638ed4] hover:bg-[#638ed4] hover:rounded" onClick={closeNav}>Projects</li>
        </Link>
        <Link spy={true} smooth={true}  to="Contact">
        <li className="my-4 py-4 border-b border-[#638ed4] hover:bg-[#638ed4] hover:rounded" onClick={closeNav}>Contact</li>
        </Link>
      </ul>

    </div>
  </>


  return (
    <nav>
       <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 border-b border-slate-800">
        <div className="flex items-center flex-1">
          <img src={logo} className="h-20 w-48 object-cover" alt="" />
          {/* <span className="text-3xl font-bold">Logo</span> */}
        </div>
        <div className="lg:flex md:flex lg:flex-1 items center justify-end  font-normal hidden">
          <div className="flex-10">
          <ul className="flex gap-8 mr-16  mt-5 text-[18px]">
        <Link spy={true} smooth={true} to="Home">
        <li className="hover:text-[#638ed4] transition border-b-2 border-slate-900 hover:border-[#638ed4] cursor-pointer">Home</li>
        </Link>
        <Link spy={true} smooth={true} to="About">
        <li className="hover:text-[#638ed4] transition border-b-2 border-slate-900 hover:border-[#638ed4] cursor-pointer">About</li>
        </Link>
        <Link spy={true} smooth={true} to="Services">
        <li className="hover:text-[#638ed4] transition border-b-2 border-slate-900 hover:border-[#638ed4] cursor-pointer">Services</li>
        </Link>
        <Link spy={true} smooth={true} to="Projects">
        <li className="hover:text-[#638ed4] transition border-b-2 border-slate-900 hover:border-[#638ed4] cursor-pointer">Projects</li>
        </Link>
        <Link spy={true} smooth={true} to="Contact">
        <li className="hover:text-[#638ed4] transition border-b-2 border-slate-900 hover:border-[#638ed4] cursor-pointer">Contact</li>
        </Link>
      </ul>

          </div>
        </div>
        <div>
          {click && content}
        </div>
        <button  className="block sm:hidden transition" onClick={handleClick}>
           {click ? <FaTimes /> : <CiMenuBurger />}
        </button>
       </div>
    </nav>
  )
}

export default Nav
       
