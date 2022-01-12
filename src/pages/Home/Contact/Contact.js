import React from 'react';
import bg from '../../../images/contact.png'

const Contact = () => {
  return (
    <div id='contact' className='bg-seconDary_bg py-12'>
      <div className="small-container">
        <h1 className='font-bold uppercase text-2xl text-center mb-5'>Get In <span className='text-primary_bg'>Touch</span></h1>
        <div className="grid md:grid-cols-2">
          <div>
            <h2 className='text-2xl font-semibold text-primary_text'>Contact Form</h2>
            <form className='w-5/6'>
              <div>
                <input className='w-full py-2.5 px-3 my-2 outline-none border-0 bg-white' type="text" placeholder="Your Name" />
              </div>
              <div>
                <input className='w-full py-2.5 px-3 my-2 outline-none border-0 bg-white' type="email" placeholder="Your Email" />
              </div>
              <div>
                <textarea className='w-full py-2.5 px-3 my-2 outline-none border-0 bg-whitee' placeholder='Your Message' rows="5"></textarea>
              </div>
              <button type='submit' className='px-8 rounded-sm text-white font-semibold py-2.5 bg-primary_bg'>Send Message</button>
            </form>
          </div>
          <div>
            <img src={bg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;