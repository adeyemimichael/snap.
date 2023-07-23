import react from 'react'
import video from '../assets/videoBg.mp4'
 const Main = () => {

    return (

        <div className='bg-gray-800 text-[#ffffff] flex flex-col  text-left w-screen h-screen items-center '>
            
<video src={video} loop autoPlay muted />

<div className="content absolute w-full h-full flex justify-center items-center flex-col">
<div className="overlay w-full h-full top-0 left-0 absolute bg-[#10101039]"></div>
<h1 className='font-bold text-[50px] mx-4 my-8 shadow-md '>What we do</h1>
<p  className='py-3 px-2 leading-8'>Join us in revolutionizing the way your team works remotely.
 Embrace the power of connectivity, efficiency, and engagement with Remote Work Solutions. 
 Together, we'll turn your remote workforce into a 
formidable force that achieves remarkable outcomes.
<span className='py-2 bg-zinc-50 text-slate-950 px-2 rounded-lg spa hover:shadow-slate-600 hover:text-zinc-700 cursor-pointer'>Contact us</span> today to unlock your team's true potential.
</p>
</div>


        
          

            
            </div>
    )
 } 
 
 export default Main 