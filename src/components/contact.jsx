import React from 'react'

const contact = () => {
  return (
    <div className='mt-20 max-w-[700px] mx-auto w-[80%] pb-4'> 
    <h1 className='font-bold text-4xl py-8 text-center'>Contact </h1>
        <form action="https://getform.io/f/8777d304-b02b-421b-84e8-ed818ca44187" method='POST' encType='multipart/form-data'>
            <div className="grid gap-4 md:grid-cols-2">
                <div className="flex flex-col">
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input type="text" name='name'  className='border-2 rounded-md p-2 outline-none border-slate-500'/>
                </div>
                <div className="flex flex-col">
                    <label className='uppercase text-sm py-2'>Phone</label>
                    <input type="text" name='phone' className='border-2 rounded-md p-2 outline-none border-slate-500'/>
                </div>
            </div>
            <div className="flex flex-col">
                <label className='uppercase text-sm py-2'>Email</label>
                <input type="email" name='emain' className='border-2 rounded-md p-2 outline-none border-slate-500'/>
            </div>
            <div className="flex flex-col">
                <label className='uppercase text-sm py-2'>Subject</label>
                <input type="text" name='subject' className='border-2 rounded-md p-2 outline-none border-slate-500'/>
            </div>
            <div className="flex flex-col">
                <label className='uppercase text-sm py-2'>message</label>
                <textarea name="messsage"  rows="10" className='border-2 p-2 rounded-md outline-none border-slate-500'></textarea>
            </div>
            <button className='w-full py-2 bg-green-800 rounded-lg mt-2 text-white text-md font-semibold hover:bg-transparent hover:text-slate-900 hover:border-2 hover:border-green-800 ease-in duration-300 '>Send message</button>
        </form>
    </div>
  )
}

export default contact