import tanveer from '../images/tanveer.png'
import { FaGithub , FaLinkedin, FaInstagram} from "react-icons/fa"; 
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className='bg-slate-800 text-white lg:px-48 px-4 py-20'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3  gap-4'>
        <div className='mb-4 md:mb-0'>
          <span><img src={tanveer} className='h-32 w-auto -mt-5 object-cover' alt="" /></span>
          <p className='lg:mt-5 text-[16px] my-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio dolore commodi recusandae quae. Quidem animi aliquam accusamus, itaque, totam commodi autem eligendi ea saepe quia id. Error nihil excepturi aspernatur.</p>
        </div>
        <div className='lg:ml-20 '>
          <h2 className='text-4xl font-semibold text-fuchsia-800 uppercase pro' >Contact</h2>
          <p className='lg:mt-20  luck email'> khantanveer6077@gmail.com</p>
          <p className='email'>+91 6394826676 </p>
        </div>
        <div>
        <h2 className='mb-4 md:mb-0 uppercase text-4xl font-semibold text-fuchsia-800 pro1'>follow me</h2>
        <div className='flex gap-5 lg:mt-20 text-xl logo'>
          <a href="" className='hover:text-fuchsia-500'>
          <FaGithub />
          </a>
          <a href="" className='hover:text-fuchsia-500'>
          <FaLinkedin/>
          </a>
          <a href="" className='hover:text-fuchsia-500'>
          <FaInstagram />
          </a>
          <a href="" className='hover:text-fuchsia-500'>
          <FaXTwitter />
          </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
