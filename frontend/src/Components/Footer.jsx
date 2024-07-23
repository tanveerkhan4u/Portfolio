import logo from '../images/logo.png'
import { FaGithub , FaLinkedin, FaInstagram} from "react-icons/fa"; 
import { FaXTwitter } from "react-icons/fa6";



const Footer = () => {
  return (
    <footer className='bg-slate-800 text-white lg:px-48 px-4 py-20'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3  gap-4'>
        <div className='mb-4 md:mb-0'>
          <span><img src={logo} className='h-32  w-64 -mt-5 object-cover khan' alt="" /></span>
          <p className='lg:mt-5 text-[16px] my-4'>Thank you for visiting my portfolio! I hope you enjoyed exploring my work and learning about my journey as a Full Stack Web Developer. If you have any questions, project inquiries, or just want to say hello, feel free to reach out. Let's build something amazing together!</p>
        </div>
        <div className='lg:ml-20 '>
          <h2 className='text-4xl font-semibold text-[#638ed4] uppercase pro' >Contact</h2>
          <p className='lg:mt-20  luck email'> khantanveer6077@gmail.com</p>
          <p className='email'>+91 6394826676 </p>
        </div>
        <div>
        <h2 className='mb-4 md:mb-0 uppercase text-4xl font-semibold text-[#638ed4] pro1'>follow me</h2>
        <div className='flex gap-5 lg:mt-20 text-xl logo'>
          <a href="https://github.com/tanveerkhan4u" className='hover:text-[#638ed4]'>
          <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/mohd-tanveer-khan-b05a63243/" className='hover:text-[#638ed4]'>
          <FaLinkedin/>
          </a>
          <a href="https://www.instagram.com/" className='hover:text-[#638ed4]'>
          <FaInstagram />
          </a>
          <a href="https://twitter.com/" className='hover:text-[#638ed4]'>
          <FaXTwitter />
          </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
