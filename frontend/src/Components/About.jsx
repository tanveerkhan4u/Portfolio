import pic from '../images/pic.jpeg'





const About = () => {
  return (
    <div id="About" className="">
      <div className="lg:px-56  px-10  py-10 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center ">
      <img data-aos="fade-down" src={pic} width={290} height={290} className="rounded-full border-2 p-1 border-[#638ed4] pic_glow" alt="" />
      <div  className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white ">
        <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-8 leading-normal uppercase text-[#638ed4]">About Me</h1>
        <p data-aos="fade-left">Hello! I'm Mohd Tanveer Khan, a passionate Full Stack Web Developer with over a year of hands-on experience in creating dynamic and responsive web applications. My journey in web development is fueled by a deep love for coding and an insatiable curiosity for learning new technologies.With a background in both front-end and back-end development, I have honed my skills to build seamless and efficient applications. I specialize in transforming innovative ideas into reality by leveraging the power of modern web technologies.</p>
        
      </div>
     
    </div>
    </div>
  )
}

export default About


