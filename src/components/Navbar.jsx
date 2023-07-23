import react from 'react'


const Navbar = () =>{
    return (

<div className='container block  sm:flex items-center justify-between h-24 max-w-[1240px]'>
 <div className='mx-3 justify-between items-center block h-screen bg-gray-500 sm:bg-transparent 
 sm:h-24 sm:flex px-6 w-1/2 sm:w-full' >
<h1 className='text-[#191a1a] font-bold text-3xl w-full'>Snap.</h1>
<ul className=' block sm:flex  cursor-pointer text-black sm:text-gray-400'>
<li className='p-4 text-gray-400 hover:text-gray-900'>
    <select name="Features " id="features" className='bg-transparent '>
<option value="Feature" selected>Features</option>
<option value="Feature ">TodoLists</option>
<option value="Feature ">Calendars</option>
<option value="Feature ">Reminders</option>
<option value="Feature ">Add Planning</option>
</select>
</li>

<li className='p-4 text-gray-400 hover:text-gray-900'>
    <select name="Features " id="features">
<option value="Feature" selected>Company </option>
<option value="Feature ">History</option>
<option value="Feature ">Our Team</option>
<option value="Feature ">Blog</option>
</select>
</li>
<li className='p-4 text-gray-400 hover:text-gray-900'>Career </li>
<li className='p-4 text-gray-400 hover:text-gray-900'>About</li>
<li className='p-4 text-gray-400 hover:text-gray-900'></li>
</ul>
 </div>
 <div className='justify-between items-center  block sm:flex  px-4 bg-gray-600 sm:bg-transparent w-1/2 sm:w-100% mx-3 sm:mx-0'>
    <ul className=' block sm:flex cursor-pointer p-2'>
        <li className='p-4 text-gray-400 hover:text-gray-900' >Login
        </li>
        <li className='p-2 sm:p-3 border-2 rounded-md border-slate-950 border-spacing-x-4  text-gray-300 hover:text-gray-900 bg-slate-600 hover:bg-slate-50 w-1/2 '>Register</li>
        
    </ul>
 </div>
</div> 
    )
}

export default Navbar;