import Marquee from 'react-fast-marquee';

const Services = () => {
  return (
    <div  id="Services" className="p-20 flex flex-col items-center justify-center ">
      <h1 data-aos="fade-right" className="text-[52px] font-semibold leading-normal uppercase text-fuchsia-800 ">Skills</h1>
      
      <div className='container'>
        <h1 className='text-2xl text-center text-white lg:mb-10 mb-5 '>
        These are the technologies I've worked with. I'm always looking to learn new things and improve my skills.
        </h1>
        
      </div>
      <div className='container'>
      <Marquee autoFill pauseOnClick>
          <div className='bg-[#202020] m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-sky-400'>
            Tailwind CSS
          </div>
          <div className='bg-[#202020] m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-purple-700'>
            Bootstrap
          </div>
          <div className='bg-[#202020] m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-orange-700'>
            HTML
          </div>
          <div className='bg-[#202020] m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-sky-500'>
            CSS
          </div>
          <div className='bg-[#202020] m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-yellow-500'>
            Javascript
          </div>
          <div className='bg-[#202020] m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-green-500'>
            Node JS
          </div>
        </Marquee>
        <Marquee autoFill pauseOnClick direction='rigth'>
          <div className='bg-[#202020] m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-sky-500'>
            ReactJS
          </div>
          
          <div className='bg-[#202020] m-1 rounded-xl flex space-x-5 p-4 font-bold text-2xl cursor-pointer text-green-400'>
            Mongodb
          </div>
          
        </Marquee>
      </div>
      

    </div>
  )
}

export default Services
