import sun from "../images/sun.png";
import code from "../images/code.png";
import hand from "../images/hand.png";


const Projects = () => {
  return (
    <div id="Projects" className="p-20 flex flex-col items-center  justify-center ">
      <h1 className="text-[52px] font-semibold leading-normal uppercase text-fuchsia-800">projects</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-around gap-20 py-10">
        <a href="https://sunserviceslucknow.com/">
        <img src={sun} className="w-full h-full  flex items-center justify-center object-cover rounded-xl p-1  border-fuchsia-800 b_glow" alt="" />
        </a> 
        <a href="https://www.code-foundry.tech/Home">
        <img src={code} className="w-full h-full   flex items-center justify-center object-cover rounded-xl p-1  border-fuchsia-800 b_glow" alt="" />
        </a>
        <a href="https://github.com/tanveerkhan4u/Handicraft">
        <img src={hand} className="w-full h-full   flex items-center justify-center object-cover rounded-xl p-1  border-fuchsia-800 b_glow" alt="" />
        </a>
      </div>
    </div>
  )
}

export default Projects
