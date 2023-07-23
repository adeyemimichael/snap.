import react from 'react'


const Header = () => {
    return (
        <div className="container flex ">
            <div className='block text-left p-4 px-10 py-10 h-screen mx-6 my-10 w-50%'>
            <h1 className='font-bold text-5xl '>Make<br></br> remote Work</h1>
            <p className='py-4 text-gray-400'>Get your team in sync, no matter the location.<br>
            </br> Streamline Processes, create team rituals, and <br>
            </br>watch productivity soar.</p>
            <button type='submit' className='pt-2 pb-2 pl-4 pr-4 py-8 my-10 bg-slate-900 text-gray-200 rounded-lg  shadow-sm
            hover:shadow-md hover:bg-transparent hover:border-2 hover:border-black hover:text-black' >Learn more</button>
            <div className='flex  my-10 justify-between'>
                <ul className='flex p-2 space-x-4 text-[6px]'>
                <li className='text-[6px]'><img src="./images/client-databiz.svg" alt="" /></li>
                <li><img src="./images/client-audiophile.svg" alt="" /></li>
                <li><img src="./images/client-meet.svg" alt="" /></li>
                <li><img src="./images/client-maker.svg" alt="" /></li>

                </ul>
            </div>
            </div>
            <div className='overflow-hidden w-50%  mx-[-2]'>
                <img src='./images/image-hero-desktop.png' alt="" srcset=""  className='w-2/2 h-screen'/>
            </div>
        </div>
    )
}
export default Header;