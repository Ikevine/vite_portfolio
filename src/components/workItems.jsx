import React from 'react'

const workItems = ({year , title , duration , detail}) => {
  return (
    <ol className='relative border-l border-slate-400 flex w-full'>
        <li className='ml-4 mb-10'>
            <div className='absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 bg-slate-400'/>
            <p className='flex gap-4 items-center justify-start'>
                <span className='bg-green-900 py-1 rounded-md px-2 text-slate-100 '>{year}</span>
                <span className='font-semibold text-green-900 text-lg'>{title}</span>
                <span className='text-slate-500 '>{duration}</span>
            </p>
            <p className='text-base text-slate-600 mt-3 w-[90%] md:w-[60%]'>{detail}</p>
        </li>
       
    </ol>
  )
}

export default workItems