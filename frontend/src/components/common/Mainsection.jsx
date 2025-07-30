
import headphone from '../../assets/headTrans.png'
import smartwatch from '../../assets/smartWatch.png'
import ps5 from '../../assets/ps5.jpg'
import keyboard from '../../assets/keyboard.jpg'
import cam from '../../assets/cam.png'
import { Link } from 'react-router-dom'

const Mainsection = () => {
    return (

        <div className='w-full border-2 relative z-0 flex justify-center items-center h-1/2 md:h-1/3 py-2'>
            <div className="grid grid-cols-3 gap-2 mx-auto  py-4 ">

                <div className='border-2 rounded-3xl  relative text-white bg-[#a1a4ac]  px-6 col-span-2 flex justify-between items-center'>
                    <div className='w-1/3 md:w-1/2 text-sm  md:text-4xl  font-bold'>

                        <h1 className=''>Noise <span>Canceling</span></h1>
                        <h2 className='font-light text-sm mb-1'>Head phones</h2>
                        <p className=' font-medium text-xs md:text-sm w-[12rem] text-zinc-600 md:w-86'> Newly Lauched HeadPhone 20mm Driver, Latest BT ver-5.4 </p>
                    </div>

                    <span className='absolute bottom-1 left-6 md:bottom-4 md:left-12  border-slate-900 hover:border-b-4 hover:border-t-slate-800 hover:border-t-2 px-2 py-1 rounded-xl hover:cursor-pointer   text-white text-xs md:text-md font-bold'>Check it out</span>

                    <img className='md:w-80 w-36 object-left-top' src={headphone} />
                </div>

                <div className='relative  '>

                    <img className=' w-full h-full  object-fit rounded-3xl' src={smartwatch} />
                     <span className='absolute bottom-2 left-3 md:bottom-4 md:left-5 hover:border-b-2  hover:cursor-pointer   text-white md:text-md text-xs font-bold'>Best Smart Wacthes</span>
                     <span className='absolute md:block hidden   md:bottom-4 md:right-10 text-xs md:text-sm  px-3 py-2 rounded-lg bg-zinc-800 hover:border-b-4 hover:border-b-zinc-400 hover:cursor-pointer   text-white text-md font-bold'>Shop now</span>

                </div>

                <div className='relative rounded-3xl '>
                    <img className='w-full h-full  object-fit rounded-3xl' src={ps5} />
                    <span className='absolute md:bottom-4 bottom-2 left-2 md:left-5  border-red-700 hover:border-b-4 hover:border-t-red-400 hover:border-t-2 px-2 py-1 rounded-xl hover:cursor-pointer   text-white text-xs md:text-md font-bold'>Discover now</span>
                </div>



                <div className='relative'>
                    <span className='absolute w-46 md:text-xl top-2 left-2 md:top-14 md:left-5  hover:cursor-pointer   text-white text-[0.7rem] md:text-md font-bold'>Logitech Bluetooth Keyboards</span>

                    <img className='w-full  object-fit rounded-3xl h-full object-left-top' src={keyboard} />

                    <span className='absolute bottom-2 left-2 md:bottom-4 md:left-5  hover:cursor-pointer   text-white text-xs md:text-md font-bold hover:border-b-2 '>Best for all Device</span>

                </div>


                <div className='relative'>
                    <div className='absolute w-46 text-xs top-2 left-2 md:text-xl md:top-4 md:left-5   hover:cursor-pointer   text-white font-md font-bold'>
                       Canon Cameras
                        <div className='text-xs md:text-lg font-light'>
                            Built for Professionials
                        </div>
                        
                        </div>
                    <img className='w-full  object-fit rounded-3xl h-full object-left-top' src={cam} />
                   <Link to={'/collection'}><span className='absolute bottom-2 left-3 text-xs md:bottom-4 md:left-5 text-m hover:border-b-2  hover:cursor-pointer   text-white md:font-md font-bold'>Buy now best price</span></Link> 
                 <Link to={'/collection'}>
                 
                 <span className='absolute md:block hidden bottom-4 right-10 text-sm  px-3 py-2 rounded-lg bg-zinc-800 hover:border-b-4 hover:border-b-zinc-400 hover:cursor-pointer   text-white text-md font-bold'>Shop now</span>
                 </Link>    
                 
                   
                </div>

            </div>
        </div>
    )
}

export default Mainsection