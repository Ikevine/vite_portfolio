import React from 'react'
import ProjectItem from './projectItem'
const project = () => {
  return (
    <div className='w-[70%] mx-auto flex flex-col items-center justify-center my-4 '>
        <h1 className='text-center font-bold text-4xl py-4 text-green-900'>Projects</h1>
        <p className='text-center text-slate-600 py-8 text-md md:text-lg md:w-[70%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aliquam in, optio laudantium nobis libero laborum!</p>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-12 '>
            <ProjectItem img='./mobile .png' title='Mobile app'/>
            <ProjectItem img='./dashboard.png' title='Dashboard'/>
            <ProjectItem img='./login.png' title='Login page'/>
        </div>
    </div>
  )
}

export default project