import  * as Yup from 'yup';
import { enqueueSnackbar } from 'notistack';
import { useFormik } from 'formik';

const ContactSchema = Yup.object().shape({
  name: Yup.string().required('Name is Require').min(4, 'Name is too short'),
  email: Yup.string().email('email is invalid').required(' Required'),
  Message: Yup.string().required('Message is Required').min(20, 'Message is too short')

});


const Contact = () => {


  const ContactForm = useFormik ({
    initialValues: {
      name: '',
      email: '',
      Message : ''
    },

    onSubmit: async (values, {setSubmitting, resetForm}) => {
      console.log(values);
      setSubmitting(true);
      const res = await fetch(`${import.meta.env.VITE_API_URL}/contact/add`,{
        method: 'POST',
        body:JSON.stringify(values),
        headers: {
          'content-Type' : 'application/json'
        }
      });
      setSubmitting(false);
      if (res.status === 200) {
        enqueueSnackbar('Message Sent Successfully', { variant: 'success' });
        resetForm();
      }  else {
        enqueueSnackbar('Something went wrong', { variant: 'error' });
      }
    },

  });

  return (
    <div className="p-4 lg:p-20 flex flex-col items-center justify-center " id="Contact">
      <h1 data-aos="fade-left" className="text-[52px] font-semibold leading-normal uppercase text-[#638ed4] lg:p-10 ">Contact Us</h1>
      <form  onSubmit={ContactForm.handleSubmit} action="" className="flex flex-col gap-2 lg:w-1/2">
        <div className="lg:flex gap-6 ">
    
        
          <input className="w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-[#638ed4] b_glow text-xl text-white" placeholder="Enter Your Name" id='name' type="text"  onChange={ContactForm.handleChange} value={ContactForm.values.name} />
        
      
          <input className="w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-[#638ed4] b_glow text-xl text-white" placeholder="Enter Your Email" id='email' type="text"  onChange={ContactForm.handleChange} value={ContactForm.values.email}/>
        </div>
        
      
        <textarea className="w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-[#638ed4] b_glow text-xl text-white" placeholder="Write Your Message..." onChange={ContactForm.handleChange} value={ContactForm.values.Message} name="" id="Message" cols="20" rows="10"></textarea>
        <button className="neno-button shadow-xl hover:shadow-[#638ed4] text-white border-2 border-[#638ed4] bg-[#638ed4]  hover:bg-[#638ed4] rounded-lg py-4 px-8 uppercase relative overflow-hidden bg-glow text-xl text-bold my-6" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Contact






