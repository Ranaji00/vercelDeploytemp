import React, { useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
import '../../../src/index.css'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircleOutline } from "react-icons/io5";
import Search from './Search';
import Checkout from './Checkout';






const Header = () => {

    const [isOpen, setOpen] = useState(false);
    const [issideOpen, setsideOpen] = useState(true);



    return (
        <>

            <nav className='w-screen md:py-1 py-2 flex items-center  justify-around text-xl '>


                <div className='flex gap-4 md:gap-12  items-center justify-between '>


                    <div className=''>BYTE<span className='text-[#044794] '>CRAFT</span></div>
                    <Search />




                </div>


                <div>
                    <ul className='hidden md:flex gap-4  justify-between '>
                        <li>Home</li>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Contact us</li>
                    </ul>
                </div>


                <div className='flex md:text-2xl gap-4 justify-between '>
                    <div className='text-lg md:text-2xl'><FaRegHeart /></div>
                    <div onClick={() => setOpen(!isOpen)} className='md:text-3xl text-xl relative'><AiOutlineShoppingCart />
                        <span className='bg-red-600 text-white text-xs px-2 left-4  -top-2 py-1 rounded-full absolute '>5</span>
                    </div>
                    <div className=''><FaRegUser /></div>
                </div>

                <div className='text-2xl md:hidden'>

                    <div onClick={()=>setsideOpen(!issideOpen)}>

                        <GiHamburgerMenu />

                    </div>


                </div>


            </nav>


            <Checkout isOpen={isOpen} setOpen={setOpen} />

            {/* mobile nav */}

            <div className={`gap-2 w-1/2  md:hidden bg-white fixed top-0 left-0 border-2 flex transition-all transform duration-700 ease-in ${issideOpen ? "translate-x-0" : "-translate-x-full"} border-stone-400 px-2 py-4  h-screen w-[16rem] md:w-[20rem] flex-col justify-between`}>

                <div className=' flex flex-col gap-4'>

                    <span
                        onClick={() => setsideOpen(!issideOpen)} className='flex justify-end text-xl'>
                        <IoCloseCircleOutline />
                    </span>

                    <h1 className=' text-lg border-b-2 font-semibold '>
                        Menu
                    </h1> 


                    <ul >
                        <li>HOME</li>
                        <li>Products</li>
                        <li>About</li>
                        <li>Blog</li>
                    </ul>

                </div>

            </div>



        </>
    )
}

export default Header