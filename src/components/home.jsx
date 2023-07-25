import React from 'react'
import { BsBehance } from 'react-icons/bs';
import {FaFacebookF , FaTwitter , FaInstagram , FaBehance , FaLinkedinIn} from 'react-icons/fa';

import { TypeAnimation } from 'react-type-animation';
const home = () => {
  return (
    <div id='home'>
      <img src="./main.jpg" alt="main_image" className='w-full h-screen object-cover'/>
      <div className='w-full h-screen absolute top-0 left-0 bg-black/40'>
        <div className="max-w-[700px] m-auto w-full h-screen flex flex-col justify-center md:items-start  items-center text-white">
            <h1 className='text-4xl md:text-5xl capitalize '>I'm Kevine Ishimwe</h1>
            <h2 className='flex my-[5%] text-xl'>
                I'm 
                <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'MERN STACK Developer',
                    2000,
                    'UI UX Designer',
                    2000,

                ]}
                wrapper="div"
                speed={40}
                style={{ fontSize: '1em', paddingLeft:"0.5rem"}}
                repeat={Infinity}
             />
            </h2>
            {/* social media */}
            <div className="flex justify-between  max-w-[200px] w-full">
                  <a href="">
                   <FaFacebookF className='hover:scale-110' size={20}/>
                  </a>
                  <a href="">
                   <FaInstagram className='hover:scale-110' size={20}/>
                  </a>
                  
                  <a href="" >
                    <FaTwitter className='hover:scale-110' size={20}/>
                  </a>
                  <a href="">
                    <FaLinkedinIn className='hover:scale-110' size={20}/>
                  </a>
                  <a href="">
                   <BsBehance className='hover:scale-110' size={20}/> 
                  </a>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default home