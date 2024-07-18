import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import pic from '../images/pic.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {

  AOS.init({
    easing: 'ease-out-quart',
    delay: 0,
    duration: 750
  })

  return (
    <div  className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center ">
      <div data-aos="fade-up" className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white ">
        <h1 className="text-[52px] font-semibold mb-8 leading-normal uppercase">Welcome To <span className="text-fuchsia-500 ">my Portfolio</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eveniet accusamus quis ipsum eum debitis repellat ducimus, explicabo sunt tempore, natus enim ad accusantium, minus aperiam corporis commodi optio saepe!</p>
        <div className="flex mt-8 gap-2 ">
          <div className="flex items-center justify-center ">
            <div className="flex space-x-2 ">
              <a href="" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
              <AiFillGithub  className="text-[28px]"/>
              </a>
              <a href="" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
              <FaLinkedinIn  className="text-[28px]"/>
              </a>
              <a href="" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
              <FaInstagram  className="text-[28px]"/>
              </a>
              <a href="" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
              <FaXTwitter  className="text-[28px]"/>
              </a>

            </div>
          </div>
        </div>
      </div>
      <img src={pic} width={290} height={290} className="rounded-full border-2 p-1 border-fuchsia-500 pic_glow" alt="" />
    </div>
  )
}

export default Banner


