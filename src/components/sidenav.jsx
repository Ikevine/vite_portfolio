import {React , useState} from 'react';
import {AiOutlineMenu , AiOutlineHome ,AiOutlineProject, AiOutlineMail} from  'react-icons/ai';
import {MdWorkOutline} from 'react-icons/md';
import {BsPerson} from 'react-icons/bs';

const sidenav = () => {

    const [nav , setNav] = useState(false);
    const handleNav = () =>{
        setNav(!nav);
    }
  return (
    //menu nav
    <>
       <AiOutlineMenu onClick={handleNav} size={24} className='absolute top-4 right-4 z-[99] md:hidden text-white'/>
       {/* ternary operator */}
       {
        nav ? (
            <div className='fixed w-full h-screen flex flex-col justify-center items-center bg-white z-[98]'>
                <a href="#home" className='flex items-center justify-center w-[70%] bg-gray-100 shadow-lg shadow-gray-400 p-2 hover:scale-110 ease-in duration-300 rounded-lg m-2 cursor-pointer'>
                  <AiOutlineHome size={20}/>
                  <span className='pl-4'>Home</span>
                </a>
                <a href="#work" className='flex items-center justify-center w-[70%] bg-gray-100 shadow-lg shadow-gray-400 p-2 hover:scale-110 ease-in duration-300 rounded-lg m-2 cursor-pointer'>
                  <MdWorkOutline size={20}/>
                  <span className='pl-4'>Work</span>
                </a>
                <a href="#project" className='flex items-center justify-center w-[70%] bg-gray-100 shadow-lg shadow-gray-400 p-2 hover:scale-110 ease-in duration-300 rounded-lg m-2 cursor-pointer'>
                  <AiOutlineProject size={20}/>
                  <span className='pl-4'>Projects</span>
                </a>
                <a href="#resume" className='flex items-center justify-center w-[70%] bg-gray-100 shadow-lg shadow-gray-400 p-2 hover:scale-110 ease-in duration-300 rounded-lg m-2 cursor-pointer'>
                  <BsPerson size={20}/>
                  <span className='pl-4'>Resume</span>
                </a>
                <a href="#contact" className='flex items-center justify-center w-[70%] bg-gray-100 shadow-lg shadow-gray-400 p-2 hover:scale-110 ease-in duration-300 rounded-lg m-2 cursor-pointer'>
                  <AiOutlineMail size={20}/>
                  <span className='pl-4'>Contact</span>
                </a>
            </div>
        ):(
            ""
        )
       }

       {/* sideNav on large screen */}
       <div className='fixed top-[20%] left-[1%] z-10 md:block hidden'>
          <div className='flex flex-col'>
            <a href="#home" className='bg-white shadow-lg shadow-gray-400 m-2 p-4 rounded-full hover:scale-110 ease-in duration-300'>
                <AiOutlineHome size={20}/>
            </a>
            <a href="#work" className='bg-white shadow-lg shadow-gray-400 m-2 p-4 rounded-full hover:scale-110 ease-in duration-300'>
                <MdWorkOutline size={20}/>
            </a>
            <a href="#project" className='bg-white shadow-lg shadow-gray-400 m-2 p-4 rounded-full hover:scale-110 ease-in duration-300'>
                <AiOutlineProject size={20}/>
            </a>
            <a href="#resume" className='bg-white shadow-lg shadow-gray-400 m-2 p-4 rounded-full hover:scale-110 ease-in duration-300'>
                <BsPerson size={20}/>
            </a>
            <a href="#contact" className='bg-white shadow-lg shadow-gray-400 m-2 p-4 rounded-full hover:scale-110 ease-in duration-300'>
                <AiOutlineMail size={20}/>
            </a>
          </div>
       </div>
    </>

  )
}

export default sidenav