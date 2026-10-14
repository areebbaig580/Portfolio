import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

const Form = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_30nhlcp', 'template_wb8i6fn', form.current, {
                publicKey: 'V2pCxeKOYQAhvxYru',
            })
            .then(
                () => {
                    alert('Inquiry send succesfuly please check your email and spam folder in email')
                    form.current.reset();
                },
                (error) => {
                    alert('there is some problem with the enquiry please try again', error)
                },
                
            );
    }

    return (
        <form ref={form} onSubmit={sendEmail} className='h-fit w-full md:w-[40vw]  mt-5 md:mt-0 md:mr-15 lg:mr-20 xl:mr-30 flex flex-col gap-8'>
            <div className='border-b border-gray-300 flex flex-col gap-2 px-2'>
                <div className='md:text-xl font-semibold'>Your Name</div>
                <input type="text" className='w-full outline-none border-none mb-2 md:mb-4 md:text-xl' name='name' placeholder='Full Name' required/>
            </div>
            <div className='border-b border-gray-300 flex flex-col gap-2 px-2'>
                <div className='md:text-xl font-semibold'>Your Email</div>
                <input type="text" className='w-full outline-none border-none mb-2 md:mb-4 md:text-xl' name='email' placeholder='Email Address' required/>
            </div>
            <div className='border-b border-gray-300 flex flex-col gap-2 px-2'>
                <div className='md:text-xl font-semibold'>Project Enquiry</div>
                <input type="text" className='w-full outline-none border-none mb-2 md:mb-4 md:text-xl' name='subject' placeholder='Project Enquiry' required/>
            </div>
            <div className='border-b border-gray-300 flex flex-col gap-2 px-2'>
                <div className='md:text-xl font-semibold'>Project Description</div>
                <textarea name="message" className='w-full outline-none border-none mb-2 md:mb-4 md:text-xl' placeholder='Project Description' required></textarea>
            </div>

            <input type='submit' value='Submit Inquiry' className='h-fit w-fit px-2 py-2 md:px-4 md:py-4 bg-black text-white md:text-xl font-semibold rounded-xl md:rounded-2xl cursor-pointer uppercase'/>

        </form>
    )
}

export default Form
