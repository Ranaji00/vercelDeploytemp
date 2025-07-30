import React from 'react'
import { IoLogoInstagram } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoFacebook } from "react-icons/io";


const Topbar = () => {
    return (

        <>

        <div className='w-screen md:flex hidden  border-8  px-8 justify-around  bg-gradient-to-r from-[#6FB1FC] via-[#4364F7] to-[#0052D4] text-white py-1'>

            <div className=' md:flex hidden justify-between items-center text-2xl gap-2'>
                <a><IoLogoFacebook /></a>
                <a><IoLogoInstagram /></a>
                <a className='text-xl'><BsTwitterX /></a>
            </div>

            <div className='flex-grow text-center '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci numquam rem placeat.
            </div>

            <div className='hidden md:block'>
                contact us  +91 757657589
            </div>

        </div>



        </>


    )
}

export default Topbar