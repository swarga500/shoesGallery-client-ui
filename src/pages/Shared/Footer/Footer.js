import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineYoutube, AiFillPhone } from 'react-icons/ai'
import { BsEnvelopeFill, BsSuitHeartFill } from 'react-icons/bs'
import { ImLocation } from 'react-icons/im'
import { FaLocationArrow } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer py-5'>
      <div className="small-container">
        <div className="grid md:grid-cols-4 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <div>
            <NavLink to='/home' className="text-xl uppercase font-bold text-white">Shoe Gallery</NavLink>
            <p className='text-primary_text mt-2'>Integer ut ligula quis lectus fringilla elementum porttitor sed est. Duis fringilla efficitur ligula sed lobortis</p>
            <div className='mt-2 flex gap-2'>
              <AiOutlineTwitter style={{ color: "#fff", fontSize: "20px" }} />
              <AiOutlineFacebook style={{ color: "#fff", fontSize: "20px" }} />
              <AiOutlineLinkedin style={{ color: "#fff", fontSize: "20px" }} />
              <AiOutlineInstagram style={{ color: "#fff", fontSize: "20px" }} />
              <AiOutlineYoutube style={{ color: "#fff", fontSize: "20px" }} />
            </div>
          </div>
          <div className='sm:text-center'>
            <h1 className="uppercase text-md font-semibold text-white">COMPANY</h1>
            <ul className='mt-3'>
              <li className='my-2 text-primary_text hover:text-primary_bg transition-color duration-300 cursor-pointer'>About us</li>
              <li className='my-2 text-primary_text hover:text-primary_bg transition-color duration-300 cursor-pointer'>Our Service</li>
              <li className='my-2 text-primary_text hover:text-primary_bg transition-color duration-300 cursor-pointer'>Work for us</li>
              <li className='my-2 text-primary_text hover:text-primary_bg transition-color duration-300 cursor-pointer'>Products</li>
              <li className='my-2 text-primary_text hover:text-primary_bg transition-color duration-300 cursor-pointer'>Programs</li>
            </ul>
          </div>
          <div>
            <h1 className="uppercase text-md font-semibold text-white">Useful Links</h1>
            <ul className='mt-3'>
              <li className='my-2 text-primary_text hover:text-primary_bg transition-color duration-300 cursor-pointer'>The Collections</li>
              <li className='my-2 text-primary_text hover:text-primary_bg transition-color duration-300 cursor-pointer'>Size Guide</li>
              <li className='my-2 text-primary_text hover:text-primary_bg transition-color duration-300 cursor-pointer'>Return Policy</li>
            </ul>
          </div>
          <div>
            <h1 className="uppercase text-md font-semibold text-white">Shopping</h1>
            <ul className='mt-3'>
              <li className='my-2 text-primary_text hover:text-primary_bg transition-color duration-300 cursor-pointer'>Look Book</li>
              <li className='my-2 text-primary_text hover:text-primary_bg transition-color duration-300 cursor-pointer'>Shop Sidebar</li>
              <li className='my-2 text-primary_text hover:text-primary_bg transition-color duration-300 cursor-pointer'>Shop Fulwidth</li>
              <li className='my-2 text-primary_text hover:text-primary_bg transition-color duration-300 cursor-pointer'>Man and Wemen</li>
            </ul>
          </div>
          <div>
            <h1 className="uppercase text-md font-semibold text-white">Contact Info</h1>
            <div className='flex gap-3 text-primary_text items-center mt-3'>
              <AiFillPhone />
              <p>+88 017631-5555</p>
            </div>
            <div className='flex gap-3 text-primary_text items-center mt-3'>
              <BsEnvelopeFill />
              <p>khayrul@gmail.com</p>
            </div>
            <div className='flex gap-3 text-primary_text items-center mt-3'>
              <ImLocation />
              <p>XYZ road, Rangpur</p>
            </div>
            <div className='flex text-primary_text items-center mt-3'>
              <input type="email" placeholder='Email' className='py-2 px-3 outline-none border-0 bg-white w-75 ' />
              <button className=' subscribeBtn outline-none border-0 bg-primary_bg text-white'><FaLocationArrow /></button>
            </div>
          </div>
        </div>
        <hr />
        <p className='sm:flex uppercase items-center mt-5 justify-center text-primary_text'>&copy; Shoes Gallery 2021 with <BsSuitHeartFill style={{ color: "red" }} />By Khayrul</p>
      </div>
    </div>
  );
};

export default Footer;