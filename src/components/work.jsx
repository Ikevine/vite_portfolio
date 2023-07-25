import React from 'react'
import WorkItems from './workItems'
const data =[
    {
        year:'2022',
        title:"facebook",
        duration:'3 years',
        details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ipsa repudiandae! Reiciendis accusamus, a aspernatur ipsam dolore quisquam assumenda, distinctio sint atque nemo doloremque qui!'
    },
    {
        year:'2022',
        title:"facebook",
        duration:'3 years',
        details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ipsa repudiandae! Reiciendis accusamus, a aspernatur ipsam dolore quisquam assumenda, distinctio sint atque nemo doloremque qui!'
    },
    {
        year:'2022',
        title:"facebook",
        duration:'3 years',
        details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ipsa repudiandae! Reiciendis accusamus, a aspernatur ipsam dolore quisquam assumenda, distinctio sint atque nemo doloremque qui!'
    }
]
const work = () => {
    //array of information
    
  return (
    <div className='md:w-[60%] w-[95%] mx-auto h-auto p-4  flex flex-col items-center justify-center' id='work'>
         <h1 className='font-bold text-4xl text-center text-green-800 mb-4 w-[50%]'>Work</h1>
         {
            data.map((data , idx) =>{
             return(
             <WorkItems 
                 key={idx}
                 year={data.year}
                 title={data.title}
                 duration={data.duration}
                 detail={data.details}
                />)
            })
         }
        
    </div>
  )
}

export default work