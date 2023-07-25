import React from 'react'

const projectItem = ({img , title}) => {
  return (
    <div className='relative rounded-lg shadow-lg shadow-gray-400 group hover:bg-gradient-to-r from-green-100 to-green-600'> 
        <img src={img} alt={title}  className='group-hover:opacity-20 rounded-lg'/>
        <div className='hidden group-hover:block absolute top-[50%] text-white left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='tracking-wider text-2xl font-bold text-center '>{title}</h3>
            <p className=' text-center text-slate-800 my-2'>React js</p>
            <a href="#">
                <p className='cursor-pointer p-2 bg-white text-slate-900 text-center font-semibold rounded-md'>More info</p>
            </a>
        </div>
    </div>
  )
}

export default projectItem